import {
  Component,
  ViewChild,
  ViewContainerRef,
  AfterContentInit,
  TemplateRef,
} from '@angular/core';

type BetterViewContainerRef = ViewContainerRef | null;
type BetterTemplateRef<T> = TemplateRef<T> | null;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef })
  entry: BetterViewContainerRef = null;

  @ViewChild('tmpl')
  tmpl: BetterTemplateRef<any> = null;

  ngAfterContentInit() {
    if (this.entry && this.tmpl) {
      this.entry.createEmbeddedView(this.tmpl, {
        $implicit: 'Maher, Tim',
        location: 'MD, Columbia',
      });
    }
  }
}
