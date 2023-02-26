export class PostModel {
    id: string;

    createdBy: string = new Date().toLocaleDateString();

    createdAt: string = 'admin';

    message: string = '';

    constructor(id: string) {
        this.id = id;
    }
}