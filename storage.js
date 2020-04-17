class Storage{
    static getSearchedUsersFromStorage(){
        //tüm kullanıcları al

        let users;

       if(localStorage.getItem("searched") === null){
           users = [];
       }
       else{
           users =JSON.parse(localStorage.getItem("searched"));
       }

       return users;
    }

    static addSearchedUserToStorage(username){
        //Storage kullanıc ekleme

        let users = this.getSearchedUsersFromStorage();

        //IndexOf

        if(users.indexOf(username) === -1){
            users.push(username);
        }
        localStorage.setItem("searched",JSON.stringify(users));
    }

    static clearAllSerachedUsersFromStorage(){

        localStorage.removeItem("searched");

    }
}