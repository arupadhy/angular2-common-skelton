import {Component,OnInit,ElementRef,ViewChild} from '@angular/core';
import {Router} from '@angular/router';
declare var $: any;

@Component({
    selector: 'create-plan',
    templateUrl: 'app/planner/planner.component.html',
    styleUrls: ['app/planner/planner.component.css', 'app/planner/token-input.css','app/planner/token-input-mac.css']
})
export class PlannerComponent implements OnInit{
    
    planInput:any = {};
    productInput:any = {};
    audienceInput:any = {};
    businessObjectiveInput:any = {};
    kpiToMeasureInput:any = {};
    showAddedInput:boolean = false;
    showUserInputs: boolean = false;
    @ViewChild("productInputId") product;

    
    constructor(private _router:Router,private _elementRef:ElementRef) {
       this.planInput.show = true;
       this.planInput.next = false;
       
       this.productInput.show = false;
       this.productInput.next = false;
       
       this.audienceInput.show = false;
       this.audienceInput.next = false;
       
       this.businessObjectiveInput.show = false;
       this.businessObjectiveInput.next = false;
       
       this.kpiToMeasureInput.show = false;
       this.kpiToMeasureInput.next = false;
       
    }

    public loadCycConcepts() {
      this._router.navigate(['concepts']);
    }
    
    public getCycConcepts() {
        this.kpiToMeasureInput.show = false;
        this.showUserInputs = true;
        this.kpiToMeasureInput.name = $('#kpiToMeasureInputId').val();
        //this._router.navigate(['concepts']);
    }
    
    public enableProductInput() {
      console.log($("#campaignNameInput"));
      $("#campaignNameInput").autocomplete({
        source: ["ForeEver Faster", "Where’s the Beef?", "We Try Harder", "ForeEver Lasting", " ForEver Name", "Just Do It"]
      });
       this.planInput.next = this.planInput.planName.length == 0? false:true;
    }
    
    public takeProductInput() {
        this.planInput.show = false;
        this.productInput.show = true;
        this.showAddedInput = true;
        this.planInput.planName = $("#campaignNameInput").val();
       
    }
    
    public enableAudienceInput() {
      $("#productInputId").autocomplete({
        source: ["Product1", "Product2", "Product3", "Product4", "Product5"]
      });
        this.productInput.next = this.productInput.productName.length == 0? false:true;
    }
    
    public takeAudienceInput() {
       this.productInput.show = false;
       this.audienceInput.show = true;
       this.productInput.productName = $("#productInputId").val();
    }

    public split(val) {
      this.businessObjectiveInput.next = true;
      return val.split(/,\s*/);
    }
    public extractLast(term) {
      return this.split(term).pop();
    }
    
    public enableBusinessObjectiveInput() {
      var ref = this;
      this.audienceInput.next = this.audienceInput.name.length == 0 ? false : true;
      $("#audienceInputId").autocomplete({
        minLength: 0,
        source: function(request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            ["youthful in spirit","embrace new things","Believe life's just better when you join in"], ref.extractLast(request.term)));
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function(event, ui) {
          var terms = ref.split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
        
    }

    public getSelectedKpis():string[] {
      return this.kpiToMeasureInput.name.split(",").filter(a => a.length>1);
    }

    public getSelectedBusinessObjectives():string[] {
      return this.businessObjectiveInput.name.split(",").filter(a => a.length>1);
    }

    public getSelectedTargetAudience():string[] {
      return this.audienceInput.name.split(",").filter(a => a.length > 1);
    }
    
    public takeBusinessObjectiveInput() {
        this.audienceInput.show = false;
        this.businessObjectiveInput.show = true;
        this.audienceInput.name = $("#audienceInputId").val();
    }
    
    public enableKpiMeasureInput() {
      var ref = this;
      $('#businessObjectiveInputId').autocomplete({
        minLength: 0,
        source: function(request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            ["Deliver agressive growth by capturing more penetration(325m in GSV", 
            "ReEnergize the brand and earn a coveted place in social connectors hearts",
            "Reduce the cost of manufacturing by opening online stores"], ref.extractLast(request.term)));
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function(event, ui) {
          var terms = ref.split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
        this.businessObjectiveInput.next = this.businessObjectiveInput.name.length == 0? false:true;
    }
    
    public takeKpiToMeasureInput() {
        this.businessObjectiveInput.show = false;
        this.kpiToMeasureInput.show = true;
        this.businessObjectiveInput.name = $("#businessObjectiveInputId").val();
    }
    
    public enableFinalNext() {
      var ref = this;
      $('#kpiToMeasureInputId').autocomplete({
        minLength: 0,
        source: function(request, response) {
          // delegate back to autocomplete, but extract the last term
          response($.ui.autocomplete.filter(
            ["Customer Loyality: increase engagement by 12%",
              "Make new Customers: Target young working", "Profit Margin: Target working professionals"], ref.extractLast(request.term)));
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function(event, ui) {
          var terms = ref.split(this.value);
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push(ui.item.value);
          // add placeholder to get the comma-and-space at the end
          terms.push("");
          this.value = terms.join(", ");
          return false;
        }
      });
      this.kpiToMeasureInput.next = this.kpiToMeasureInput.name?this.kpiToMeasureInput.name.length == 0 ? false : true:false;
    }
    
    ngOnInit() {
     
    }
    
}
