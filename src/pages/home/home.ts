import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vetor2 = [
    { foto:'https://preview.redd.it/iphone-20-pro-max-concept-phone-from-apple-v0-osihh9lagv3a1.jpg?width=640&crop=smart&auto=webp&s=e9d7e739a3c52cb20816e365de8c6d2f94a9a1bc', id: '1050', nome: 'Iphone 20', marca: 'Apple', preco: 'R$50,00' },
    { foto:'assets/imgs/ps6.jpg', id: '1052', nome: 'PS6', marca: 'Playstation', preco: 'R$20,00' },
    { foto:'assets/imgs/xbox720.png', id: '1054', nome: 'XBOX720', marca: 'XBOX', preco: 'R$23,00' },
    { foto:'assets/imgs/logo.png', id: '1056', nome: 'Nintendo Wii 2', marca: 'Nintendo', preco: 'R$18,00' },
  ];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Adicionar',
      message: "Insira o nome do item",
      inputs: [
        { name: 'ID', placeholder: 'ID do produto' },
        { name: 'nome', placeholder: 'Nome do produto' },
        { name: 'marca', placeholder: 'Marca do produto' },
        { name: 'preco', placeholder: 'Preço do produto' },
      ],
      buttons: [
        { text: 'Cancelar', handler: data => console.log('Cancel clicked') },
        {
          text: 'Adicionar',
          handler: data => {
            let a = { foto: data.foto, nome: data.nome, marca: data.marca, preco: data.preco, id: data.id };
            this.vetor2.push(a); 
          }
        }
      ]
    });
    prompt.present();
  }

  excluir(item) {
    console.log('excluir', item);
    this.vetor2 = this.vetor2.filter(element => element.nome !== item.nome);
  }

  showConfirm(item) {
    const confirm = this.alertCtrl.create({
      title: 'Excluir',
      message: 'Tem certeza que deseja excluir?',
      buttons: [
        { text: 'Não', handler: () => console.log('Disagree clicked') },
        { text: 'Sim', handler: () => this.excluir(item) }
      ]
    });
    confirm.present();
  }

  showEditPrompt(item) {
    const prompt = this.alertCtrl.create({
      title: 'Editar',
      message: "Altere os detalhes do item",
      inputs: [
        { name: 'ID', placeholder: 'ID do produto', value: item.id },
        { name: 'nome', placeholder: 'Nome do produto', value: item.nome },
        { name: 'marca', placeholder: 'Marca do produto', value: item.marca },
        { name: 'preco', placeholder: 'Preço do produto', value: item.preco },
      ],
      buttons: [
        { text: 'Cancelar', handler: data => console.log('Cancel clicked') },
        {
          text: 'Salvar',
          handler: data => {
            const index = this.vetor2.findIndex(element => element.id === item.id);
            if (index !== -1) {
              this.vetor2[index] = {
                foto: item.foto,
                id: data.ID,
                nome: data.nome,
                marca: data.marca,
                preco: data.preco
              };
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
