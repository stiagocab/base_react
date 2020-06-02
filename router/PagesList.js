import LoginPage from "../public/pages/login/LoginPage";
import RegisterPage from "../public/pages/register/RegisterPage";
import ChangePassword from "../public/pages/change_password/ChangePassword";
import HomePage from "../private/pages/home/HomePage";
import OrdersPage from "../private/pages/orders/OrdersPage";
import OrderPage from "../private/pages/order/OrderPage";
import ForgotPasswordPage from "../public/pages/forgot_password/ForgotPasswordPage";

const PagesList = [
   {
      view: HomePage,
      title: "Inicio",
      path: "/",
      permission: [0],
   },
   {
      view: OrdersPage,
      title: "Ordenes",
      path: "/orders",
      permission: [0],
   },
   {
      view: OrderPage,
      title: "Orden",
      path: "/orders/order/:orderId",
      permission: [0],
   },
];
export const AuthList = [
   {
      view: LoginPage,
      title: "Iniciar sesión",
      path: "/login",
      permission: [0],
   },
   {
      view: RegisterPage,
      title: "Registro",
      path: "/register",
      permission: [0],
   },
   {
      view: ForgotPasswordPage,
      title: "Recuperar contraseña",
      path: "/forgot_password",
      permission: [0],
   },
];
// change password, external pays etc
export const PublicList = [
   {
      view: ChangePassword,
      title: "Cambiar contraseña",
      path: "/change_password",
      permission: [0],
   },
];

export default [...PagesList, ...AuthList, ...PublicList];
