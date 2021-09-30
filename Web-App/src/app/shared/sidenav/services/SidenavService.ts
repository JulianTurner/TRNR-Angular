import { Injectable } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class SideNavService {
    private drawer!: MatDrawer;

    setDrawer(drawer: MatDrawer) {
        this.drawer = drawer;
    }

    toggle(): void {
        this.drawer.toggle();
    }
}
