import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from '../serviço/database.service';
import { UtilityService } from '../serviço/utility.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  


  constructor(
    private activatedRoute: ActivatedRoute,
    private banco: DatabaseService,
    private router: Router,
    private util: UtilityService
  ) { }

  ngOnInit() {

  }

  mostrarPerfil(){
    
  }
}