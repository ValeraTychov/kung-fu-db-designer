import { Injectable } from "../../../node_modules/@angular/core";
import { ElementPosition } from "../liquid-containers/components/lc-scroll-box/lc-scroll-box.component";



@Injectable()
export class SchemeEditorService {

    public editorRect: ClientRect;

    public editorScrollPosition: ElementPosition;

}