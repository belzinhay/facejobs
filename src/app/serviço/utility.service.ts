import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { login } from '../model/login.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  result!: string;
  actionsheet: any;

  cadastro: login[] = [];
  
  constructor(
    private banco: DatabaseService,
    private loadCtrl: LoadingController,
    private toastCtrl: ToastController
    ) { }

    //Método do loading
    async carrengando(message: string, duration: number){
      const load = this.loadCtrl.create({
        mode: 'ios',
        message ,
        duration
      });
    (await load).present();
    }

    async mensagemCarregando(message: string, duration: number){
      const carregar = this.loadCtrl.create({
        mode: 'ios',
        message,
        duration
      });
      (await carregar).present();
    }

    async toastando(message: string, position: "top" | "middle" | "bottom", duration: number, color: string){

      const aviso = this.toastCtrl.create({
        message,
        position,
        duration,
        color
      });

      (await aviso).present();

        setTimeout(this.metodoF5, 2000);
    }

    metodoF5(){
      location.reload();
    }

  }
