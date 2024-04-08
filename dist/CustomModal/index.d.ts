import { ReactNode } from "react";
interface CustomModalProps {
    isOpen?: boolean;
    styling?: string;
    hasCloseButton?: boolean;
    buttonContent?: ReactNode;
    buttonStyling?: string;
    children: ReactNode;
}
/**
 * @component
 * @description Custom modal based on given parameter.
 *
 * @param {CustomModalProps} props Parameters for customization
 * @param {boolean} props.isOpen Parameter to indicate if the modal needs to be open or (by default) not
 * @param {string} props.styling Parameter which add additional styling to the modal
 * @param {boolean} props.hasCloseButton Parameter to set a close button or not
 * @param {ReactNode} props.buttonContent Element(s) which will compose the button (e.g: button text such as 'Close' or an icon & some texts)
 * @param {string} props.buttonStyling Parameter composed of Tailwind classes to style the button
 * @param {ReactNode} props.children Element(s) which will populate the content of the modal
 *
 * @returns {JSX.Element}
 */
declare function CustomModal({ isOpen, styling, hasCloseButton, buttonContent, buttonStyling, children, }: CustomModalProps): JSX.Element;
export default CustomModal;
