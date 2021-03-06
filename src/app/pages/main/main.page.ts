import { Component ,OnInit} from '@angular/core';
import { ListStorage } from 'src/app/services/service.list-storage';

@Component({
    selector: 'main-page',
    templateUrl: './main.page.html',
    styleUrls: [
        './main.page.css'
    ]
})


export class MainPage implements OnInit{
    
    public listStorage : any[] = [];


    constructor(private storageList:ListStorage){ }

    ngOnInit():void{
        this.listStorage = this.storageList.list(); 
    }

} 



