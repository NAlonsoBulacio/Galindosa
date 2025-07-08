import { logo_b } from "../../../assets"
import { AiTwotonePhone, AiOutlineInstagram, AiOutlineRight } from "react-icons/ai"
import { BiLogoFacebook } from "react-icons/bi"
import { BsPinMapFill } from "react-icons/bs"
import { IoMailOutline } from "react-icons/io5"
const Footer = () => {
  return (
    <footer
      className="text-white  relative bg-gray-900"
      // style={{
      //   backgroundColor: "#716735",
      //   backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='600' preserveAspectRatio='none' viewBox='0 0 1440 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1048%26quot%3b)' fill='none'%3e%3crect width='1440' height='600' x='0' y='0' fill='rgba(113%2c 103%2c 53%2c 1)'%3e%3c/rect%3e%3cpath d='M12 600L612 0L1311 0L711 600z' fill='url(%26quot%3b%23SvgjsLinearGradient1049%26quot%3b)'%3e%3c/path%3e%3cpath d='M513.2 600L1113.2 0L1332.2 0L732.2 600z' fill='url(%26quot%3b%23SvgjsLinearGradient1049%26quot%3b)'%3e%3c/path%3e%3cpath d='M1382 600L782 0L560 0L1160 600z' fill='url(%26quot%3b%23SvgjsLinearGradient1050%26quot%3b)'%3e%3c/path%3e%3cpath d='M949.8 600L349.79999999999995 0L-37.200000000000045 0L562.8 600z' fill='url(%26quot%3b%23SvgjsLinearGradient1050%26quot%3b)'%3e%3c/path%3e%3cpath d='M844.3499471729704 600L1440 4.34994717297036L1440 600z' fill='url(%26quot%3b%23SvgjsLinearGradient1049%26quot%3b)'%3e%3c/path%3e%3cpath d='M0 600L595.6500528270296 600L 0 4.34994717297036z' fill='url(%26quot%3b%23SvgjsLinearGradient1050%26quot%3b)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1048'%3e%3crect width='1440' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1049'%3e%3cstop stop-color='rgba(255%2c 212%2c 0%2c 0.06)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(255%2c 212%2c 0%2c 0.06)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1050'%3e%3cstop stop-color='rgba(255%2c 212%2c 0%2c 0.06)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(255%2c 212%2c 0%2c 0.06)' offset='0.66'%3e%3c/stop%3e%3clinearGradient%3e%3c/defs%3e%3c/svg%3e")`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 py-10">
        <div>
          <img src={logo_b} alt="Galindo SA" className="w-2/3" />
          <p className="text-sm mb-4 poppins-light">50 años de trayectoria definen nuestra identidad.</p>
          <div className="w-full flex justify-start items-center space-x-4">
            <a
              href="https://www.facebook.com/galindosatucuman?mibextid=opq0tG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoFacebook className="text-[#ffc702] text-4xl lg:text-2xl" />
            </a>
            <a
              href="https://www.instagram.com/galindosa_arg?igsh=OXVrODZsbzMwemJz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineInstagram className="text-[#ffc702] text-4xl lg:text-2xl" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg poppins-regular mb-4">Contacto</h3>
          <a href="https://maps.app.goo.gl/6R66iTnSUaVc779v5" target="_blank" className="hover:underline text-sm mb-2 flex items-start justify-start gap-x-2">
            <BsPinMapFill className="text-xl" /> Virgen de la Merced 639
            <br />
            San Miguel de Tucumán,
            <br />
            Tucumán, Argentina
          </a>
          <a href="mailto:info@galindosa.com.ar" target="_blank" className="hover:underline text-sm mb-2 flex items-start justify-start gap-x-2">
            <IoMailOutline className="text-xl" /> Info@galindosa.com.ar
          </a>
          <a href="https://wa.me/5493812071244" target="_blank"  className="hover:underline text-sm mb-2 flex items-start justify-start gap-x-2">
            <AiTwotonePhone className="text-xl" /> +54 9 3812 07-1244
          </a>
        </div>
        <div>
          <h3 className="text-lg poppins-regular mb-4">Links</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center">
              <AiOutlineRight className="text-[#ffc702] mr-2" />
              <a href="/sobre-nosotros" className="hover:text-gray-400">
                Empresa
              </a>
            </li>
            <li className="flex items-center">
              <AiOutlineRight className="text-[#ffc702] mr-2" />
              <a href="/edificios" className="hover:text-gray-400">
                Edificios
              </a>
            </li>
            <li className="flex items-center">
              <AiOutlineRight className="text-[#ffc702] mr-2" />
              <a href="/novedades" className="hover:text-gray-400">
                News
              </a>
            </li>

            <li className="flex items-center">
              <AiOutlineRight className="text-[#ffc702] mr-2" />
              <a href="/contacto" className="hover:text-gray-400">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg poppins-regular mb-4">Suscribite</h3>
          <div className="flex flex-wrap mb-4 gap-y-2">
            <input
              type="email"
              className="w-full px-4 py-2 text-black rounded-full outline-none"
              placeholder="Tu email"
            />
            <button className="poppins-regular bg-[#ffc702] hover:bg-[#ffc702] text-white px-4 py-2 rounded-full w-full">
              SUSCRIBITE AHORA
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#051a30] py-4 mt-8">
        <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 Galindo S.A. Todos los derechos reservados</p>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white">
              Terminos y condiciones
            </a>
            <a href="#" className="hover:text-white">
              Políticas de privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

