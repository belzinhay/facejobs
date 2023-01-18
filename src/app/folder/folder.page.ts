import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { DatabaseService } from '../serviço/database.service';
import { UtilityService } from '../serviço/utility.service';
import { login } from 'src/app/model/login.model';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
 
 cadastro: login[] = [];

  constructor(
    private banco: DatabaseService,
    private alert: AlertController,
    private util: UtilityService,
    private action: ActionSheetController,
    ) { }

  ngOnInit(): void {
    this.util.mensagemCarregando("Aguarda", 1500);
    this.banco.getLogin().subscribe(results => this.cadastro = results);

}
}
