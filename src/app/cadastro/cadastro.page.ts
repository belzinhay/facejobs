import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { DatabaseService } from '../serviço/database.service';
import { UtilityService } from '../serviço/utility.service';
import { login } from 'src/app/model/login.model';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  cadastro: login[] = [];


  constructor(
    private datab: DatabaseService,
    private alert: AlertController,
    private action: ActionSheetController,
    private util: UtilityService
    ) { }

  ngOnInit(): void{
    this.util.mensagemCarregando("Aguarde...", 1500);
    this.datab.getLogin().subscribe(results => this.cadastro = results);
    
  }
  async mensagemAlert(){
    const alerta = this.alert.create({
    mode: "ios",
    header: 'Cadastrar',
    inputs: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Nome Completo'
      },
      {
        name: 'cpf',
        type: 'text',
        placeholder: 'Informe o seu CPF'
      },
      {
        name: 'cnpj',
        type: 'text',
        placeholder: 'Informe o CNPJ da sua empresa'
      },
      {
        name: 'email',
        type: 'text',
        placeholder: 'email@email.com'
      },
      {
        name: 'senha',
        type: 'password',
        placeholder: 'Informe a sua senha'
      }
    ],

    buttons: [
      {
        text: 'Cadastrar',
        handler: (guardar) => {
          let login = {nome: guardar.nome, cpf: guardar.cpf, cnpj: guardar.cnpj, email: guardar.email, senha: guardar.senha};
          
          try{
            this.datab.postLogin(login);
          }catch(err){
            console.log(err)
          }finally{
            this.util.toastMessage("Cadastro Feito com Sucesso", "bottom", 2000, "sucess");
          }
        }
      }
    ]
  });
 
  (await alerta).present();
  }

  deletarLogin(id: number){
    try{
      this.datab.deletaLogin(id);
    }catch(err){
      console.log(err);
    }finally{
      this.util.toastMessage("Cadastro Excluído", "bottom", 2000, "danger");
    }
  }
  }


