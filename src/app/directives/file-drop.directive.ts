import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appFileDrop]',
})
export class FileDropDirective {
  @Output() filesDropped = new EventEmitter<File>();
  @Output() filesHovered = new EventEmitter();

  constructor() {}

  @HostListener('drop', ['$event'])
  onDrop($event): void {
    $event.preventDefault();
    const transfer = $event.dataTransfer;
    this.filesDropped.emit(transfer.files[0]);
    this.filesHovered.emit(false);

  }

  @HostListener('dragover', ['$event'])
  onDragOver($event): void {
    $event.preventDefault();
    this.filesHovered.emit(true);

  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event): void {
    this.filesHovered.emit(false);
  }
}
