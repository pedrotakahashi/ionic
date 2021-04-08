import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LeituraPageRoutingModule } from './leitura-routing.module';
import { LeituraPage } from './leitura.page';
import { CadastroService } from './../../api/cadastro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroService,
    LeituraPageRoutingModule
  ],
  declarations: [LeituraPage]
})
export class LeituraPageModule {}
