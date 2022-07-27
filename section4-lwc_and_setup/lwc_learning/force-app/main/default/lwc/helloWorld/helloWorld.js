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
}