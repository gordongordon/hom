import { observable, computed, action } from "mobx";

export default class Status {

    @observable isShowPhone = false;
    subjectID;
    objectID;

    constructor( subjectID, objectID, isShowPhone) {
        this.subjectID = subjectID;
        this.objectID = objectID;
        this.isShowPhone = isShowPhone;
    }

    // Return object
    serialize() {
       return {
        subjectID : this.subjectID,
        objectID : this.objectID,
        isShowPhone : this.isShowPhone
       }
    }

    @action
    restore(v) {
        this.subjectID = v.subjectID;
        this.objectID = v.objectID;
        this.isShowPhone = v.isShowPhone;
    }

    @action 
    toggleIsShowPhone(){
        this.isShowPhone = !this.isShowPhone;
    } 
}