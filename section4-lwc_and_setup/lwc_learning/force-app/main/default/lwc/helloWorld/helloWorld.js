import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = 'Zero to Hero';
    title = "aura";

    changeHandler(event){
        this.title = event.target.value;
    }

    @track
    address = {
        city: 'Melbourne',
        postCode: 3008,
        country: 'Australia'
    };

    userList = ['a', 'b', 'c'];
    trackHandler(event){
        //this.address = {...this.address, "city": event.target.value};
        this.address.city = event.target.value;
        this.userList[0] = '';
    }

    /* getter example */
    users = ['john', 'smith', 'nick'];
    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[0].toUpperCase();
    }

    get multiply(){
        return this.num1 * this.num2;
    }

}