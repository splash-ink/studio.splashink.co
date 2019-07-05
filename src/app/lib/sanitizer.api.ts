// tslint:disable: prefer-const
// tslint:disable: curly

import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

let sanitizer: DomSanitizer;

export function sanitizeHtmlStyles(exp: any): SafeStyle {
    if (typeof exp === null || undefined) return;
    return sanitizer.bypassSecurityTrustStyle(exp);
}
