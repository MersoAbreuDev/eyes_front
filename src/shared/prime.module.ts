import { NgModule } from '@angular/core';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CalendarModule} from 'primeng/calendar';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipsModule} from 'primeng/chips';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputNumberModule} from 'primeng/inputnumber';
import {KnobModule} from 'primeng/knob';
import {KeyFilterModule} from 'primeng/keyfilter';
import {ListboxModule} from 'primeng/listbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {PasswordModule} from 'primeng/password';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FieldsetModule} from 'primeng/fieldset';
import {SliderModule} from 'primeng/slider';
import {ButtonModule} from 'primeng/button';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {TreeSelectModule} from 'primeng/treeselect';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SpeedDialModule} from 'primeng/speeddial';
import {CardModule} from 'primeng/card';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {SidebarModule} from 'primeng/sidebar';
import {MegaMenuModule} from 'primeng/megamenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { FileSizePipe } from './pipes/fileSize/file-size.pipe';

@NgModule({
    imports: [
        DividerModule,
        SplitterModule,
        PanelModule,
        AutoCompleteModule,
        CalendarModule,
        CascadeSelectModule,
        CheckboxModule,
        ChipsModule,
        DropdownModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        KnobModule,
        KeyFilterModule,
        ListboxModule,
        MultiSelectModule,
        PasswordModule,
        RadioButtonModule,
        SliderModule,
        SelectButtonModule,
        ToggleButtonModule,
        TreeSelectModule,
        TriStateCheckboxModule,
        ButtonModule,
        SplitButtonModule,
        SpeedDialModule,
        CardModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        DialogModule,
        DynamicDialogModule,
        SidebarModule,
        MegaMenuModule,
        PanelMenuModule,
        ToastModule,
        ToolbarModule,
        TableModule,
        FieldsetModule,
        FileUploadModule,
        MenuModule,
        MenubarModule,
        AvatarModule,
        BreadcrumbModule
    ],
    exports:[
        AutoCompleteModule,
        CalendarModule,
        CascadeSelectModule,
        CheckboxModule,
        ChipsModule,
        DropdownModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        InputNumberModule,
        KnobModule,
        KeyFilterModule,
        ListboxModule,
        MultiSelectModule,
        PasswordModule,
        RadioButtonModule,
        SliderModule,
        SelectButtonModule,
        ToggleButtonModule,
        TreeSelectModule,
        TriStateCheckboxModule,
        SplitButtonModule,
        SpeedDialModule,
        CardModule,
        ConfirmDialogModule,
        ConfirmPopupModule,
        DialogModule,
        DynamicDialogModule,
        SidebarModule,
        MegaMenuModule,
        PanelMenuModule,
        ToastModule,
        ToolbarModule,
        TableModule,
        FieldsetModule,
        FileUploadModule,
        DividerModule,
        SplitterModule,
        PanelModule,
        MenuModule,
        AvatarModule,
        MenubarModule,
        BreadcrumbModule
        
    ],
    declarations: [

    ]

})
export class PrimeModule { }