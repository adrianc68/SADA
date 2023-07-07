import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  data: any[] =
    [
      {
        "id": 1,
        "category": "Electronics",
        "product": "Smartphone",
        "unitPrice": 599.50,
        "amount": 2,
        "action": null
      },
      {
        "id": 2,
        "category": "Clothing",
        "product": "T-Shirt",
        "unitPrice": 25,
        "amount": 5,
        "action": null
      },
      {
        "id": 3,
        "category": "Books",
        "product": "Novel",
        "unitPrice": 15,
        "amount": 1,
        "action": null
      },
      {
        "id": 4,
        "category": "Home",
        "product": "Cushion",
        "unitPrice": 10,
        "amount": 3,
        "action": null
      },
      {
        "id": 5,
        "category": "Electronics",
        "product": "Headphones",
        "unitPrice": 99,
        "amount": 2,
        "action": null
      },
      {
        "id": 6,
        "category": "Clothing",
        "product": "Jeans",
        "unitPrice": 45,
        "amount": 1,
        "action": null
      },
      {
        "id": 7,
        "category": "Books",
        "product": "Cookbook",
        "unitPrice": 20,
        "amount": 2,
        "action": null
      },
      {
        "id": 8,
        "category": "Home",
        "product": "Plants",
        "unitPrice": 12,
        "amount": 4,
        "action": null
      },
      {
        "id": 9,
        "category": "Hamburguesa",
        "product": "Salchicha de Pavo",
        "unitPrice": 199,
        "amount": 1,
        "action": null
      },
      {
        "id": 10,
        "category": "Hamburguesa",
        "product": "Queso Azul",
        "unitPrice": 65,
        "amount": 2,
        "action": null
      }
    ]


  dtOptions: DataTables.Settings = {
    searching: false,
    ordering: false,
    paging: false,
    info: false,
    columns: [{
      title: 'ID',
      data: 'id'
    }, {
      title: 'Categoria',
      data: 'category'
    }, {
      title: 'Producto',
      data: 'product'
    }, {
      title: 'Precio unitario',
      data: "unitPrice",
      width: '50px',
      className: 'text-center',
    }, {
      title: 'Cantidad',
      data: "amount",
      width: '100px',
      className: 'text-center',
      render: function (data, type, row, meta) {
        if (type === 'display') {
          return '<input class="smaller-input" value="' + data + '">';
        }
        return data;
      }
    }, {
      title: 'Acción',
      data: "action",
      width: '25px',
      className: 'text-center',
      render: function (data, type, row, meta) {
        return '<button class="transparent-button" tabindex="-1"><span class="mdi mdi-close mat-icon black" aria-label="Botón de menú"></span></button>';
      }
    }],
  };


  ngOnInit() {
    // Additional initialization code
  }

}

