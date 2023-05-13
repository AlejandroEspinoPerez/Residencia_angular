import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiurlBase='http://localhost:3000';
  //apiurluser='https://residencia.onrender.com/userList/';
  apiurluser='http://localhost:3000/userList/';
  apiurlresidencia='http://localhost:3000/residenciaList/';
  apiurlapto='http://localhost:3000/apartamentoList/';
  apiurlbecado='http://localhost:3000/becadoList/';
  apiurlcantidades='http://localhost:3000/cantidades/';





  //Accesos a la user list ==============================
  postCantUser(data:any){
    return this.http.post(this.apiurlcantidades,data);
  }

  getAllUser(){
    return this.http.get(this.apiurluser);
  }
  getAllRole(){
    return this.http.get(this.apiurluser+'role');
  }
  getbycode(code:any){
    return this.http.get(this.apiurluser+code);
  }
  prosederRegister(data:any){
    return this.http.post(this.apiurluser,data);
  }
  updateUser(data:any,code:any){
    return this.http.put<any>(this.apiurluser+code ,data);
  }
  IsloggedIn(){
    return sessionStorage.getItem('username')!=null;
  }
  getUserrole(){
    return sessionStorage.getItem('userrole')!=null?sessionStorage.getItem('userrole')?.toString():'';
  }
  //obtener los accesos por roles ===========================
  getAccessbyRole(role:any,menu:any){
    return this.http.get('http://localhost:3000/roleacces?role='+role+'&menu='+menu);
  }

  //Accesos a la residencia ==============================
  getAllResidencia(){
    return this.http.get(this.apiurlresidencia);
  }
  postResidencia(data:any){
    return this.http.post<any>(this.apiurlresidencia,data);
  }
  getResidencia(){
    return this.http.get<any>(this.apiurlresidencia);
  }
  putResidencia(data:any,id : number){
    return this.http.put<any>(this.apiurlresidencia+id ,data);
  }
  deleteResidencia(id:number){
      return this.http.delete<any>(this.apiurlresidencia+id);
  }




  //Accesos a la apto ==============================
  getAllApto(){
    return this.http.get(this.apiurlapto);
  }
  postApto(data:any){
    return this.http.post<any>(this.apiurlapto,data);
  }
  getApto(){
    return this.http.get<any>(this.apiurlapto);
  }
  putApto(data:any,id : number){
    return this.http.put<any>(this.apiurlapto+id ,data);
  }
  deleteApto(id:number){
      return this.http.delete<any>(this.apiurlapto+id);
  }





  //Accesos a becados ==============================
  getAllBecado(){
    return this.http.get(this.apiurlbecado);
  }
  postBecado(data:any){
    return this.http.post<any>(this.apiurlbecado,data);
  }
  getBecado(){
    return this.http.get<any>(this.apiurlbecado);
  }
  putBecado(data:any,id : number){
    return this.http.put<any>(this.apiurlbecado+id ,data);
  }
  deleteBecado(id:number){
      return this.http.delete<any>(this.apiurlbecado+id);
  }




  getAll(){
    return this.http.get("http://localhost:3000");
  }

  getTotalRegistros(entidad:string):Observable<number>{
    const url='${this.apiurlBase}/${entidad}?_total';
    return this.http.get<{_total:number}>(url).pipe(map(res=>res._total));

  }

}
