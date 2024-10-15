export default function ContactForm() {
  return (
      <form className="flex flex-col w-full max-w-lg my-0 mx-auto">
          <div className="flex flex-col mb-2.5">
              <label className="mb-1.5" htmlFor="name">Nombre:</label>
              <input
                  type="text"
                  id="name"
                  required
                  className="p-2.5 border border-cyan-50 border-solid rounded"
              />
          </div>
          <div className="flex flex-col mb-2.5">
              <label className="mb-1.5" htmlFor="email">Correo electrónico:</label>
              <input
                  type="email"
                  id="email"
                  required
                  className="p-2.5 border border-cyan-50 border-solid rounded"
              />
          </div>
          <div className="flex flex-col mb-2.5">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                  id="message"
                  required
                  className="p-2.5 border border-cyan-50 border-solid rounded"
              />
          </div>
          <button type="submit" className="bg-blue-700 text-white p-4 border-none rounded cursor-pointer">
               Enviar
          </button>
      </form>
  )
}
