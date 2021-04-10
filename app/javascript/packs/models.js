export default class TodosModel {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.until = data.until;
        this.deleted = data.deleted;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
    }
}