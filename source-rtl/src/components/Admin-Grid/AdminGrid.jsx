import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import 'ag-grid-enterprise';
import moment from 'jalali-moment';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { AutoComplete, Dropdown, Card, Checkbox, Row, Alert, Button, Switch, InputNumber, Select, Form, Input, message, Col } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import CheckboxRenderer from './CheckboxRenderer';
import httpCaller from '../../Services/HttpService';
import AdminForm from '../Admin-Form/AdminForm';

class AdminGrid extends Component {

    // const navigate = useNavigate();
    constructor(props) {
        console.log(props);
        super(props)
        this.state = {
            idname: props.idname,
            visibledetail: false,
            disable: false,
            refresh: false,
            listid: [],
            productList: [],
            rowselected: [],
            refresh: false,
            parameterCompanyId: props.parameterCompanyId ?? "",
            pagination: props.pagination ?? true,
            isshowInLoad: props.isshowInLoad,
            requestCode: props.requestCode,
            height: props.height,
            isshowbutton: props.isshowbutton,
            apiname: props.apiname,
            title: props.title,
            columnDefs: props.columnDefs,
            subsets: props.subsets,
            filterExternal: props.filterExternal,
            params: props.params,
            serverRowsRequest: {
                PageIndex: 1,
                PageSize: 20,
            },
            // gridApi: null,
            perPage: 20,
            defaultColDef: {
                filter: true,
                sortable: true,
                floatingFilter: this.props.showfloatingFilter == undefined ? true : this.props.showfloatingFilter,
                resizable: true,
            },
            frameworkComponents: {
                checkboxRenderer: CheckboxRenderer,
            },
            localeText: {
                "selectAll": "(انتخاب همه)",
                "selectAllSearchResults": "(انتخاب همه نتایج جستجو)",
                "searchOoo": "جستجو ...",
                "blanks": "(خالی)",
                "blank": "خالی",
                "notBlank": "خالی نیست",
                "noMatches": "مطابقتی ندارد",
                "filterOoo": "فیلتر ...",
                "equals": "برابر با",
                "notEqual": "برابر نیست با",
                "empty": "انتخاب یکی",
                "lessThan": "کوچکتر از",
                "greaterThan": "بزرگتر از",
                "lessThanOrEqual": "کوچکتر یا مساوی با",
                "greaterThanOrEqual": "بزرگتر یا مساوی با",
                "inRange": "در محدوده",
                "inRangeStart": "از",
                "inRangeEnd": "تا",
                "contains": "شامل",
                "notContains": "شامل نمی شود",
                "startsWith": "شروع می شود با",
                "endsWith": "به پایان می رسد با",
                "dateFormatOoo": "yyyy-mm-dd",
                "andCondition": "و",
                "orCondition": "یا",
                "applyFilter": "اعمال",
                "resetFilter": "تنظیم مجدد",
                "clearFilter": "پاک کردن",
                "cancelFilter": "لغو",
                "textFilter": "فیلتر متن",
                "numberFilter": "فیلتر عدد",
                "dateFilter": "فیلتر تاریخ",
                "setFilter": "تنظیم فیلتر",
                "columns": "ستون‌ها",
                "filters": "فیلترها",
                "pivotMode": "حالت محوری",
                "groups": "گروه‌های ردیف",
                "rowGroupColumnsEmptyMessage": "برای تنظیم گروه های ردیف اینجا را بکشید",
                "values": "مقادیر",
                "valueColumnsEmptyMessage": "برای جمع آوری اینجا را بکشید",
                "pivots": "برچسب‌های ستون",
                "pivotColumnsEmptyMessage": "برای تنظیم برچسب های ستون، اینجا را بکشید",
                "group": "گروه",
                "loadingOoo": "در حال بارگذاری داده‌ها ...",
                "noRowsToShow": "محتوایی برای نمایش وجود ندارد",
                "enabled": "فعال شد",
                "pinColumn": "سنجاق ستون",
                "pinLeft": "سنجاق سمت  چپ",
                "pinRight": "سنجاق سمت راست",
                "noPin": "بدون سنجاق",
                "valueAggregation": "جمع مقادیر",
                "autosizeThiscolumn": "اندازه خودکار این ستون",
                "autosizeAllColumns": "اندازه خودکار همه ستون‌ها",
                "groupBy": "دسته‌بندی براساس",
                "ungroupBy": "لغو گروه‌بندی توسط",
                "resetColumns": "تنظیم مجدد ستون‌ها",
                "expandAll": "باز کردن همه",
                "collapseAll": "بستن همه",
                "copy": "کپی",
                "ctrlC": "Ctrl+C",
                "copyWithHeaders": "کپی با هدر",
                "paste": "پیست",
                "ctrlV": "Ctrl+V",
                "export": "خروجی",
                "csvExport": "خروجی CSV",
                "excelExport": "خروجی Excel",
                "sum": "جمع",
                "min": "کمترین",
                "max": "بیشترین",
                "none": "هیچ یک",
                "count": "تعداد",
                "avg": "میانگین",
                "filteredRows": "فیلتر شده",
                "selectedRows": "انتخاب شده",
                "totalRows": "تعداد ردیف‌ها",
                "totalAndFilteredRows": "ردیف‌ها",
                "more": "بیشتر",
                "to": "تا",
                "of": "از",
                "page": "صفحه",
                "nextPage": "صفحه بعدی",
                "lastPage": "آخرین صفحه",
                "firstPage": "اولین صفحه",
                "previousPage": "صفحه قبلی",
                "pivotColumnGroupTotals": "جمع",
                "pivotChartAndPivotMode": "نمودار محوری و حالت محوری",
                "pivotChart": "نمودار محوری",
                "chartRange": "نمودار این محدوده",
                "columnChart": "ستونی",
                "groupedColumn": "گروه بندی شده",
                "stackedColumn": "انباشته شده",
                "normalizedColumn": "۱۰۰٪ انباشته شده",
                "barChart": "نمودار میله‌ای",
                "groupedBar": "گروه بندی شده",
                "stackedBar": "انباشته شده",
                "normalizedBar": "۱۰۰٪ انباشته شده",
                "pieChart": "نمودار دایره‌ای",
                "pie": "نمودار دایره‌ای",
                "doughnut": "نمودار دونات",
                "line": "نمودار خطی",
                "xyChart": "X Y (پراکنده)",
                "scatter": "پراکنده کردن",
                "bubble": "حباب",
                "areaChart": "منطقه",
                "area": "منطقه",
                "stackedArea": "انباشته شده",
                "normalizedArea": "۱۰۰٪ انباشته شده",
                "histogramChart": "هیستوگرام",
                "pivotChartTitle": "نمودار محوری",
                "rangeChartTitle": "نمودار محدوده",
                "settings": "تنظیمات",
                "data": "داده",
                "format": "فرمت",
                "categories": "دسته‌بندی‌ها",
                "defaultCategory": "(خالی)",
                "series": "سری",
                "xyValues": "مقادیر X Y",
                "paired": "حالت جفت شده",
                "axis": "محور",
                "navigator": "ناوبر",
                "color": "رنگ",
                "thickness": "ضخامت",
                "xType": "نوع X",
                "automatic": "خودکار",
                "category": "دسته‌بندی",
                "number": "عدد",
                "time": "زمان",
                "xRotation": "X چرخش محور",
                "yRotation": "Y چرخش محور",
                "ticks": "کنه‌ها",
                "width": "عرض",
                "height": "ارتفاع",
                "length": "طول",
                "padding": "فاصله درونی",
                "spacing": "فاصله گذاری",
                "chart": "نمودار",
                "title": "عنوان",
                "titlePlaceholder": "عنوان نمودار - برای ویرایش دوبار کلیک کنید",
                "background": "پس‌زمینه",
                "font": "فونت",
                "top": "بالا",
                "right": "راست",
                "bottom": "پایین",
                "left": "چپ",
                "labels": "عنوان",
                "size": "سایز",
                "minSize": "حداقل اندازه",
                "maxSize": "حداکثر اندازه",
                "legend": "افسانه",
                "position": "موقعیت",
                "markerSize": "اندازه نشانگر",
                "markerStroke": "نشانگر سکته",
                "markerPadding": "فاصله درونی نشانگر",
                "itemSpacing": "فاصله مورد",
                "itemPaddingX": "فاصله درونی عرضی",
                "itemPaddingY": "فاصلی درونی افقی",
                "layoutHorizontalSpacing": "فاصله افقی",
                "layoutVerticalSpacing": "فاصله عمودی",
                "strokeWidth": "عرض ضربه",
                "offset": "انحراف",
                "offsets": "انحراف‌ها",
                "tooltips": "عنوان کمکی",
                "callout": "فراخوانی",
                "markers": "نشانگرها",
                "shadow": "سایه",
                "blur": "تاری",
                "xOffset": "انحراف عرضی",
                "yOffset": "انحراف افقی",
                "lineWidth": "عرض خط",
                "normal": "معمولی",
                "bold": "پررنگ",
                "italic": "کج",
                "boldItalic": "پررنگ و کج",
                "predefined": "از پیش تعریف شده",
                "fillOpacity": "پر کردن شفافیت",
                "strokeOpacity": "شفافیت خط",
                "histogramBinCount": "سطل شمارش",
                "columnGroup": "ستون",
                "barGroup": "میله‌ای",
                "pieGroup": "دایره‌ای",
                "lineGroup": "خطی",
                "scatterGroup": "X Y (پراکنده)",
                "areaGroup": "منطقه",
                "histogramGroup": "هیستوگرام",
                "groupedColumnTooltip": "گروه‌بندی شده",
                "stackedColumnTooltip": "انباشه شده",
                "normalizedColumnTooltip": "۱۰۰٪ انباشته شده",
                "groupedBarTooltip": "گروه‌بندی شده",
                "stackedBarTooltip": "انباشته شده",
                "normalizedBarTooltip": "۱۰۰٪ انباشته شده",
                "pieTooltip": "دایره‌ای",
                "doughnutTooltip": "دونات",
                "lineTooltip": "خطی",
                "groupedAreaTooltip": "منطقه",
                "stackedAreaTooltip": "انباشته شده",
                "normalizedAreaTooltip": "۱۰۰٪ انباشته شده",
                "scatterTooltip": "پراکنده کردن",
                "bubbleTooltip": "حباب",
                "histogramTooltip": "هیستوگرام",
                "noDataToChart": "هیچ داده ای برای ترسیم نمودار موجود نیست.",
                "pivotChartRequiresPivotMode": "نمودار محوری باید حالت محوری فعال باشد.",
                "chartSettingsToolbarTooltip": "منو",
                "chartLinkToolbarTooltip": "متصل کردن به جدول",
                "chartUnlinkToolbarTooltip": "لغو اتصال به جدول",
                "chartDownloadToolbarTooltip": "دانلود نمودار",
                "ariaHidden": "مخفی",
                "ariaVisible": "قابل رویت",
                "ariaChecked": "بررسی شده",
                "ariaUnchecked": "بررسی نشده",
                "ariaIndeterminate": "نامشخص",
                "ariaDefaultListName": "لیست",
                "ariaColumnSelectAll": "گزینه انتخاب همه ستون‌ها را تغییر دهید",
                "ariaInputEditor": "ویرایشگر ورودی",
                "ariaDateFilterInput": "ورودی فیلتر تاریخ",
                "ariaFilterList": "لیست فیلتر",
                "ariaFilterInput": "ورودی فیلتر",
                "ariaFilterColumnsInput": "فیلتر ورودی ستون‌ها",
                "ariaFilterValue": "فیلتر مقادیر",
                "ariaFilterFromValue": "فیلتر از مقدار",
                "ariaFilterToValue": "فیلتر تا مقدار",
                "ariaFilteringOperator": "عملیات فیلترینگ",
                "ariaColumn": "ستون",
                "ariaColumnList": "لیست ستون",
                "ariaColumnGroup": "گروه ستون",
                "ariaRowSelect": "برای انتخاب این ردیف، SPACE را فشار دهید",
                "ariaRowDeselect": "برای لغو انتخاب این ردیف، SPACE را فشار دهید",
                "ariaRowToggleSelection": "برای تغییر وضعیت انتخاب ردیف، Space را فشار دهید",
                "ariaRowSelectAll": "Space را فشار دهید تا انتخاب همه ردیف‌ها تغییر کند",
                "ariaToggleVisibility": "برای تغییر حالت دید، SPACE را فشار دهید",
                "ariaSearch": "جستجو",
                "ariaSearchFilterValues": "جستجوی مقادیر فیلتر",
                "ariaLabelColumnMenu": "منو ستون",
                "ariaLabelCellEditor": "ویرایشگر سلول",
                "ariaLabelDialog": "گفتگو",
                "ariaLabelSelectField": "انتخب فیلد",
                "ariaLabelTooltip": "عنوان کمکی",
                "ariaLabelContextMenu": "منوی زمینه",
                "ariaLabelSubMenu": "زیر منو",
                "ariaLabelAggregationFunction": "تابع جمع"
            }

        };
        // console.log("this.props.showfloatingFilter");
        // console.log(this.props.showfloatingFilter);

    }


    componentDidMount = () => {



    }
    componentWillReceiveProps = async (nextProps) => {

       
        if (nextProps.columnDefs != this.state.columnDefs) {
            this.setState({ columnDefs: nextProps.columnDefs })
        }
        
        if (nextProps.filterExternal != this.state.filterExternal && nextProps.apiname!=this.state.apiname) {
            
            await this.setState({ filterExternal: nextProps.filterExternal })
            const dataSource = this.getServerSideDatasource(nextProps.filterExternal);
            if (this.params != undefined) {
                this.params.api.setDatasource(dataSource);
            }
        }

    }

    onGridReady = (params) => {
        this.setState({ params: params })
        // console.log("params", params);
        this.params = params;
        if (this.state.isshowInLoad == true) {
            const dataSource = this.getServerSideDatasource(null);
            this.params.api.setDatasource(dataSource);
        }
    };
    getServerSideDatasource = (filterExternal) => {


        return {

            getRows: async (params) => {
                this.state.serverRowsRequest.SortModels = params.sortModel;
                let filteredFields = params.filterModel;
                let mappedFilters = [];
                for (let filteredField in filteredFields) {

                    let filterObject;
                    if (filteredFields[filteredField].condition1) {
                        filterObject = {
                            Field: filteredField,
                            Condition1: filteredFields[filteredField].condition1,
                        }
                        if (filterObject.Condition1.filterType != "set") {
                            filterObject.Condition1.filter = filterObject.Condition1.filter.toString();
                        }
                        if (filteredFields[filteredField].operator) filterObject.FilterOperator = filteredFields[filteredField].operator;
                        if (filteredFields[filteredField].condition2) {
                            filterObject.Condition2 = filteredFields[filteredField].condition2;
                            if (filterObject.Condition2.filterType != "set") {
                                filterObject.Condition2.filter = filterObject.Condition2.filter.toString();
                            }

                        }
                    } else {
                        filterObject = {
                            Field: filteredField,
                            Condition1: filteredFields[filteredField]
                        }
                        if (filterObject.Condition1.filterType != "set") {
                            filterObject.Condition1.filter = filterObject.Condition1.filter.toString();
                        }

                    }
                    mappedFilters.push(filterObject)


                }
                this.state.serverRowsRequest.filterModels = mappedFilters;
                if (filterExternal != null && params.filterModel) {
                    this.state.serverRowsRequest.filterModels = filterExternal;
                }

                this.state.serverRowsRequest.PageIndex = (params.startRow / this.state.perPage) + 1;
                const page = params.endRow / this.state.perPage;

                await httpCaller.CRUDGrid.GetAll(this.state.apiname, this.state.serverRowsRequest, (result) => {
                    params.successCallback(result.data.list, result.data.totalCount);
                }, () => { }, true)

            },
        };
    }

    onFilterChanged = () => {
        var FilterModel = this.gridApi.getFilterModel()
        // console.log(FilterModel);
    };
    onclearfilter = () => {

        this.params.api.setFilterModel(null);
        // this.params.api.getFilterModel();
        const dataSource = this.getServerSideDatasource();
        this.params.api.setDatasource(dataSource);
    }


    showAdd = () => {
        this.ClickCrud("Add");
    };
    showEdit = () => {
        let selectedData = this.params.api.getSelectedRows();

        if (selectedData.length < 1) {
            console.log("ردیفی را انتخاب نمایید");
            message.error("ردیفی را انتخاب نمایید");
            return;
        }
        this.ClickCrud("Edit", selectedData[0]);
    };
    showDelete = () => {
        let selectedData = this.params.api.getSelectedRows();

        if (selectedData.length < 1) {
            console.log("ردیفی را انتخاب نمایید");
            message.error("ردیفی را انتخاب نمایید");
            return;
        }
        this.ClickCrud("Delete", selectedData[0]);
    };
    showDetail = () => {
        let selectedData = this.params.api.getSelectedRows();

        if (selectedData.length < 1) {
            console.log("ردیفی را انتخاب نمایید");
            message.error("ردیفی را انتخاب نمایید");
            return;
        }
        console.log("this.state.apiname ", this.state.apiname);
        this.ClickCrud("Detail", selectedData[0]);
        return;
        // this.props.history.push({ pathname: '/myapp/EcarSales', state: { mellicode: selectedData[0].mellicode } })
        this.props.history.push({ pathname: '/myapp/crm/company/companydetail', state: { companyID: selectedData[0].companyID } })
        //this.props.history.push({ pathname: '/ExchangesDetail', state: { sarafiId: 12 }, })
    }

    ClickCrud = async (mode, rowselected) => {
        console.log("rowselected", rowselected);
        switch (mode) {

            case "Add":
                // this.props.history.push({ pathname: '/myapp/crm/company/companydetail', state: { listid: null } })
                if (this.state.subsets != undefined) {
                this.state.subsets.map(item => {
                    item.filterExternal[0]["Condition1"]["filter"] = ""
                })
            }
                this.setState({
                    visibledetail: true,
                    mode: "Add",
                    disable: false,
                    refresh: false,
                    columnDefs: this.state.columnDefs,
                    listid: ""
                })
                break;
            case "Edit":
            case "Delete":
            case "Detail":
                //let filterExternal0 = { ...filterExternal[0] };

                if (this.state.subsets != undefined) {
                    // console.log("this.state.subsets", this.state.subsets);
                    this.state.subsets.map(item => {
                        item.filterExternal[0]["Condition1"]["filter"] = rowselected[this.state.idname.split(',')[0]] == undefined ? "" : rowselected[this.state.idname.split(',')[0]].toString()
                        // console.log("item..filterExternal[0]['Condition1']['filter']", item.filterExternal[0]["Condition1"]["filter"]);

                        // this.setState({ subsets });
                    })
                }
                let listid = []
                this.state.idname.split(',').map(item => {
                    let itemarray = { id: rowselected[item].toString() }
                    listid.push(itemarray);

                });

                await this.setState({
                    visibledetail: true,
                    mode: mode,
                    disable: mode == "Delete" || mode == "Detail" ? true : false,
                    rowselected: rowselected,
                    refresh: false,
                    columnDefs: this.state.columnDefs,
                    listid: listid// [{ id: rowselected[this.state.idname.split(',')[0]] == undefined ? "" : rowselected[this.state.idname.split(',')[0]].toString() }]

                })
                console.log("this.state.listid", this.state.listid);
            // this.props.history.push({ pathname: '/myapp/crm/company/companydetail', state: { listid: [{ id:rowselected.companyID.toString()}] } })

        }
    }

    ClickForm = () => {
        this.setState({ visibledetail: false, refresh: true })
    }
    Refreshlist = () => {

        const dataSource = this.getServerSideDatasource(this.state.filterExternal);
        this.params.api.setDatasource(dataSource);
        this.setState({
            refresh: true,
            visible: false,
        });

    }

    render() {
        return (

            <div>
                <AdminForm
                    ClickForm={this.ClickForm}
                    mode={this.state.mode}
                    disable={this.state.disable}
                    columnDefs={this.state.columnDefs}
                    title={this.state.title}
                    listid={this.state.listid}
                    apiname={this.state.apiname}
                    visibledetail={this.state.visibledetail}
                    parentCallback={this.Refreshlist}
                    subsets={this.state.subsets}
                />
                {this.state.isshowbutton == true ?
                    <Row>
                        {/* <Col lg={12} md={12} xs={24} sm={12} xl={8}  >
                            <Alert message="امکان فیلتر نمودن هر یک از ستونها وجود دارد " type="warning" showIcon />
                        </Col> */}
                        <Col lg={24} md={24} xs={24} sm={24} xl={24}  >
                            <Button.Group>
                                <Button value="Add" onClick={this.showAdd}>ایجاد</Button>
                                <Button value="Edit" onClick={this.showEdit}>ویرایش</Button>
                                <Button value="Delete" onClick={this.showDelete}>حذف</Button>
                                <Button value="Detail" icon="search" onClick={this.showDetail}>جزییات </Button>
                                {this.state.showfloatingFilter == true ?
                                    <Button icon="search" onClick={this.onclearfilter}>حذف فیلتر </Button> : ""}
                            </Button.Group>

                        </Col>
                    </Row>
                    : ""}

                <div style={{ height: this.state.height, width: "100%" }}>

                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        rowData={this.state.rowData}
                        onGridReady={this.onGridReady}
                        animateRows={true}
                        pagination={this.state.pagination}
                        rowModelType={'infinite'}
                        paginationPageSize={this.state.perPage}
                        cacheBlockSize={this.state.perPage}
                        frameworkComponents={this.state.frameworkComponents}
                        className="ag-theme-alpine"
                        enableRtl="true"
                        headerHeight="30"
                        rowHeight="30"
                        rowSelection={"single"}
                        enableRangeSelection="true"
                        localeText={this.state.localeText}
                        defaultColDef={this.state.defaultColDef}

                        multiSortActive={true}
                    // onFilterChanged={this.onFilterChanged.bind(this)}
                    >
                    </AgGridReact>
                </div>

            </div>

        )
    }
}




export default withRouter(AdminGrid);
