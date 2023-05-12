import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import{Chart,registerables}from 'node_modules/chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  dataUser:any;
  dataResidencia:any;
  dataApto:any;
  dataBecado:any;
  dataTotal:any;
  cantResidencia=0;
  cantUser=0;
  cantApto=0;
  cantBecado=0;
  total=30;
  entidadU="userlist";




  constructor(private service:ApiService) {
  }
  ngOnInit(): void {
    
    this.service.getAllUser().subscribe(res=>{
        this.dataUser=res;
        if (this.dataUser!=null) {
          this.setCantUser( this.dataUser.length);
          this.getPorcientoUser(this.dataUser.length);
        }
      })
      this.service.getAllApto().subscribe(res=>{
        this.dataApto=res;
        if (this.dataApto!=null) {
          this.cantApto =this.dataApto.length;
          this.getPorcientoApto(this.dataApto.length);
        }
      })
      this.service.getAllBecado().subscribe(res=>{
        this.dataBecado=res;
        if (this.dataBecado!=null) {
        this.cantBecado =this.dataBecado.length;
        this.getPorcientoBecado(this.dataBecado.length);


        }
      })
      this.service.getAllResidencia().subscribe(res=>{
        this.dataResidencia=res;
          this.cantResidencia =this.dataResidencia.length;

          this.getPorcientoResidencia(this.dataResidencia.length);

      })

      console.log(this.service.getTotalRegistros(this.entidadU));





  }

  logueado=!this.service.IsloggedIn();

  porCientoResidencia=0;
  porCientoBecado=0;
  porCientoApartamento=0;
  porCientoUsuario=0;

    setCantUser(cant:any){
      this.cantUser=cant;
    }

    getPorcientoResidencia(cantResidencia:any){
      this.porCientoResidencia=Math.floor(100*cantResidencia/this.total);

    }
    getPorcientoUser(cantUser:any){
      this.porCientoUsuario=Math.floor(100*cantUser/this.total) ;

    }
    getPorcientoBecado(cantBecado:any){
      this.porCientoBecado=Math.floor(100*cantBecado/this.total);

    }
    getPorcientoApto(cantApto:any){
      this.porCientoApartamento=Math.floor(100*cantApto/this.total);

    }


 renderChart(){
    const myChart=  new Chart('piechart', {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
    }



}

