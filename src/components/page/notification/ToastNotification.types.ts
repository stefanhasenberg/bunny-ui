export interface ToastNotificationProps {
    type: ("SUCCESS" | "WARNING" | "DEFAULT"),
    title?: string,
    message?: string
}