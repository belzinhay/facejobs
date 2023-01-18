import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../serviço/database.service';
import { UtilityService } from '../serviço/utility.service';

@Component({
  selector: 'app-atualizar',
  templateUrl: './atualizar.page.html',
  styleUrls: ['./atualizar.page.scss'],
})
export class AtualizarPage implements OnInit {

  routerid = null;
  cadastro: any = {};
  img = "";

  constructor(
    private activateRoute: ActivatedRoute,
    private banco: DatabaseService,
    private router: Router,
    private util: UtilityService
  ) { }

  ngOnInit() {

    this.routerid = this.activateRoute.snapshot.params['id'];

    if(this.routerid){
      this.banco.getLoginUnica(this.routerid).subscribe(results => {this.cadastro = results});
    }
  }

  editarLogin(form: any){
    try{
      this.banco.updateLogin(form.value, this.routerid);
    }finally{
      this.util.toastando("Cadastro Atualizado", "bottom", 2000, "secondary");
      this.router.navigate(['/perfil']);
    }

  }

}
