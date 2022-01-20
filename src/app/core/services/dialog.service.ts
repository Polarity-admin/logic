import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';
import Swal, { SweetAlertIcon, SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

/**
 * 確認・結果表示用ダイアログサービス
 */
@Injectable({
    providedIn: 'root'
})
export class DialogService {

    // 通用ダイアログ定義
    private dialogOption: SweetAlertOptions = {
        showConfirmButton: false,
        showCancelButton: false,
        showDenyButton: false,
        allowEscapeKey: true,
        allowOutsideClick: false,
        keydownListenerCapture: true,
        heightAuto: false,
        padding: '3em',
        confirmButtonText: 'OK',
        denyButtonText: 'Retry',
        cancelButtonText: 'Cancel',
        customClass: {
            title: 'custom-swal-title',
            htmlContainer: 'custom-swal-content',
            confirmButton: 'btn btn-key custom-swal-confirm',
            denyButton: 'btn btn-primary custom-swal-cancel',
            cancelButton: 'btn btn-primary custom-swal-cancel',
            closeButton: 'custom-close-button'
        }
    }

    constructor(private translate: TranslateService) { }

    /**
     * 処理結果を通知するために利用
     * @param messageId メッセージID
     * @param params パラメーター{p1:'p1',p2:''p2}
     * @returns
     */
    success(messageId: string, params?: any): Promise<SweetAlertResult<any>> {
        return this.alert('success', messageId, params);
    }

    /**
     * エラーを通知するために利用
     * @param messageId メッセージID
     * @param params パラメーター{p1:'p1',p2:''p2}
     * @returns
     */
    error(messageId: string, params?: any): Promise<SweetAlertResult<any>> {
        return this.alert('error', messageId, params);
    }

    /**
     * 警告を通知するために利用
     * @param messageId メッセージID
     * @param params パラメーター{p1:'p1',p2:''p2}
     * @returns
     */
    warning(messageId: string, params?: any): Promise<SweetAlertResult<any>> {
        return this.alert('warning', messageId, params);
    }

    /**
     * 情報を通知するために利用
     * @param messageId メッセージID
     * @param params パラメーター{p1:'p1',p2:''p2}
     * @returns
     */
    info(messageId: string, params?: any): Promise<SweetAlertResult<any>> {
        return this.alert('info', messageId, params);
    }

    /**
     * 確認する際に利用するために利用
     * @param messageId メッセージID
     * @param params パラメーター{p1:'p1',p2:''p2}
     * @returns 
     */
    confirm(messageId: string, params?: any): Promise<SweetAlertResult<any>> {
        const confirmDialogOption = { ...this.dialogOption };
        confirmDialogOption.showConfirmButton = true;
        confirmDialogOption.showCancelButton = true;
        confirmDialogOption.focusCancel = true;
        return Swal.mixin(confirmDialogOption).fire('', this.translate.instant(messageId, params), 'question');
    }

    /**
     * 確認する際に利用するために利用(再試行可能な場合)
     * @param messageId メッセージID
     * @param params パラメーター{p1:'p1',p2:''p2}
     * @returns
     */
    confirmWithRetry(messageId: string, params?: any): Promise<SweetAlertResult<any>> {
        const confirmDialogOption = { ...this.dialogOption };
        confirmDialogOption.showConfirmButton = true;
        confirmDialogOption.showCancelButton = true;
        confirmDialogOption.showDenyButton = true;
        confirmDialogOption.focusCancel = true;
        confirmDialogOption.width = 500;
        return Swal.mixin(confirmDialogOption).fire('', this.translate.instant(messageId, params), 'question');
    }

    private alert(icon: SweetAlertIcon, messageId: string, params?: any): Promise<SweetAlertResult<any>> {
        const alertDialogOption = { ...this.dialogOption };
        alertDialogOption.showConfirmButton = true;
        return Swal.mixin(alertDialogOption).fire('', this.translate.instant(messageId, params), icon);
    }
}
