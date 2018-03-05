import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { DataService } from "../../services/data.service";
import { TdDataTableService, TdDataTableSortingOrder, ITdDataTableSortChangeEvent, ITdDataTableColumn } from '@covalent/core';
import { IPageChangeEvent } from '@covalent/core';
import * as moment from "moment";
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Router } from '@angular/router';
import {MatSelectChange} from '@angular/material';
import * as _ from 'lodash';
import { $ } from 'protractor';
import { setTimeout } from 'timers';

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
  expos: any[];
  vendors: any[];
  search_text: string;
  filteredExpos: any[];
  displayVendors: any[];
  clear_button = false;
  selectedExpo: any;

  searchboxText: string;
  selectedCat: string;

  categories = [];

  constructor(private _dataTableService: TdDataTableService, public dataService: DataService, private _dialogService: TdDialogService,
  private _viewContainerRef: ViewContainerRef, private router: Router) {
    this.loading = true;
    dataService.getVendors().then(success => {
        this.data = success.vendors;
        this.vendors = _.sortBy(success.vendors, 'name_english');
        this.expos = success.expos;
        this.filteredExpos = this.filterExpos(this.expos);
        console.log( this.vendors);
        console.log( this.filteredExpos);
        this.filteredData = this.data;
        this.filteredTotal = this.filteredData.length;
        this.loading = false;
        // this.filter();
    });

  }

  changeValue($event: EventEmitter<MatSelectChange>) {
    this.filterVendors(null);
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

    showDate(input: string): string {
        return moment(input).format('Do MMMM YYYY');
    }

    resetFilter(): void {
        this.displayVendors = _.cloneDeep(this.vendors);
        if (!this.selectedExpo) {
            this.clear_button = false;
            return;
        }
    }

    filterVendors(ev: any): void {
        console.log(event);

        // Reset items back to all of the items
        this.resetFilter();

        // set val to the value of the searchbar
        const val = this.search_text;

        try {
            // if the value is an empty string don't filter the items
            if ((val && val.trim() !== '') || this.selectedCat) {
                this.displayVendors = this.vendors
                    .filter(v => v.name_english !== null)
                    .filter(v => {
                        console.log("????");
                        if (this.selectedCat) {
                            console.log("?2");
                            console.log(v.category);
                            const capCats = [];
                            for (const c of v.category) {
                                capCats.push(_.capitalize(c));
                            }
                            console.log("?3");
                            console.log(capCats);
                            return capCats.includes(this.selectedCat);
                        }
                        return true;
                    })
                    .filter(v => val ? v.name_english
                                .toLowerCase()
                                .indexOf(val.toLowerCase()) > -1 : true)
                    .filter(v => this.selectedExpo ? v.expo_id === this.selectedExpo.id : true);
                    this.clear_button = true;
            } else {
                this.resetFilter();
            }
        } catch (ex) {
            console.log("error:", ex);
            console.log("value: " + val);
        }
    }

    resetFully() {
        this.selectedExpo = null;
        this.search_text = '';
        this.selectedCat = '';
        this.resetFilter();
    }

    filterUpcomingExpos(expos: any[]) {
        return _.sortBy([ ...expos ]
            .filter(expo => {
                const endDate = moment(expo.date_end);
                const today = moment();
                const twoDaysAgo = today.subtract(2, 'days');
                return endDate > twoDaysAgo;
            }), "date_start");
    }

    filterExpos(expos: any[]) {
        return _.sortBy([ ...expos ], "date_start");
    }

    filterByExpo(expo) {
        this.selectedExpo = expo;
        this.displayVendors = this.vendors.filter(v => v.expo_id === expo.id);
        const categories = this.displayVendors.map(vendor => vendor.category);
        console.log(categories);
        const combinedCats = _.union.apply(_, categories);
        const capCats = [];
        for (let c of combinedCats) {
            capCats.push(_.capitalize(c));
        }
        const uniqueCats = _.uniq(capCats);
        console.log(uniqueCats);
        this.categories = uniqueCats.sort();
        console.log(this.displayVendors);
        this.clear_button = true;
    }

}
