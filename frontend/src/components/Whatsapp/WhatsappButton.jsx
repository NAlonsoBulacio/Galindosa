import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
  return (
    <a href="https://wa.me/+5493812071244" target="_blank" rel="noreferrer" className="wp-btn" onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: "contact",
                  eventCategory: "Interacción",
                  eventAction: "Click en botón de consulta",
                  eventLabel: sectionProps?.title || "Sección sin título",
                  content_type: "contact",
                });
              }}>
      <button
        className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 rounded-full h-32 w-32 flex justify-center items-center text-white z-10"
        style={{ height: "50px", width: "50px" }}
      >
        <FaWhatsapp size={35} />
      </button>
    </a>
  )
}

export default WhatsAppButton

