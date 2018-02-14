import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from "../../services/data.service";
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import * as moment from "moment";
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-expo',
  templateUrl: './visit-expo.component.html',
  styleUrls: ['./visit-expo.component.scss']
})
export class VisitExpoComponent implements OnInit {

  questions: any[] = [
    {title: "one.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."},

    {title: "two.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."},

    {title: "three.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."},

    {title: "four.", question: "question", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin convallis neque libero, eu placerat quam aliquet sed."}
  ];

   columns: ITdDataTableColumn[] = [
    { name: 'name_english',  label: 'Name', sortable: true, width: {min: 180 }},
    { name: 'expo_name', label: 'Expo', filter: true, sortable: true, width: {min: 200 }},
    // { name: 'stand_number', label: 'Stand Number', filter: true, sortable: true, width: {min: 200 }},
    { name: 'category', label: 'Category', filter: true, sortable: true, width: {min: 200 }},
    // { name: 'delivery_data', label: 'Delivery', filter: true, sortable: true, hidden: false },
    // { name: 'contact_email', label: 'Email', filter: true, width: {min: 200 }},
    { name: 'url_website', label: 'Website', sortable: false, width: {min: 320 }}
  ];

  data: any[];

  myExpos: any[];

  filteredData: any[];
  filteredTotal: number;
  loading: boolean = true;

  menuOpenX: number = 0;
  menuOpenY: number = 0;

  searchTerm: string = '';
  fromRow: number = 1;
  currentPage: number = 1;
  pageSize: number = 10;
  sortBy: string = 'name_english';
  selectable: boolean = true;
  multiple: boolean = true;
  clickable: boolean = true;
  selectedRows: any[] = [];
  sortOrder: TdDataTableSortingOrder = TdDataTableSortingOrder.Ascending;

  constructor(private _dataTableService: TdDataTableService, public dataService: DataService, private _dialogService: TdDialogService,
  private _viewContainerRef: ViewContainerRef, private router: Router) {
    this.loading = true;
    dataService.getVendors().then(success => {
        this.data = success.vendors;
        console.log( this.data);
        this.filteredData = this.data;
        this.filteredTotal = this.filteredData.length;
        this.loading = false;
        // this.filter();
    });

  }

  extractExpos(expos) {
    let _expos = this.myExpos;
    // console.log(_expos);
    let __expos = expos.filter(function(ex){
      return _expos.includes(ex.id);
    });
    let eArr = [];
    for(let e of __expos) {
      eArr.push(e.name_english);
    }
    return eArr;
  }

  refresh() {
    this.loading = true;
    this.dataService.getVendors().then(success=>{
        this.data = success.vendors;
        console.log( this.data);
        this.filteredData = this.data;
        this.filteredTotal = this.filteredData.length;
        this.loading = false;
        this.selectedRows = [];
        this.searchTerm = '';
        this.filter();
        this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  sort(sortEvent: ITdDataTableSortChangeEvent): void {
    this.sortBy = sortEvent.name;
    this.sortOrder = sortEvent.order;
    this.filter();
  }

  search(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.filter();
  }

  page(pagingEvent: IPageChangeEvent): void {
    this.fromRow = pagingEvent.fromRow;
    this.currentPage = pagingEvent.page;
    this.pageSize = pagingEvent.pageSize;
    this.filter();
  }

  filter(): void {
    let newData: any[] = this.data;
    let excludedColumns: string[] = this.columns
    .filter((column: ITdDataTableColumn) => {
      return ((column.filter === undefined && column.hidden === true) ||
              (column.filter !== undefined && column.filter === false));
    }).map((column: ITdDataTableColumn) => {
      return column.name;
    });
    newData = this._dataTableService.filterData(newData, this.searchTerm, true, excludedColumns);
    this.filteredTotal = newData.length;
    newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
    newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
    this.filteredData = newData;
  }

}
