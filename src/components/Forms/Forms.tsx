import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "../../schema/schema-validation-forms";
import Input from "../Input/Input";
import { validVacancy } from "../../schema/schema-validation-forms";
import { createUser } from "../../api/usersApi/usersApi";
import { useState } from "react";
import Message from "../message/Message";

interface IFormRequestStatus {
  status: 'success' | 'error' | null
  message: string | null
}

const Forms = () => {
  const methods = useForm<FormData>({ resolver: zodResolver(formSchema) });
  const { register, handleSubmit, formState: { errors } } = methods;

  const [formRequestStatus, setFormRequestStatus] = useState<IFormRequestStatus>({
    status: null,
    message: null,
  })

  const onSubmit = async (data: FormData) => {
    try {
      await createUser(data)
      setFormRequestStatus({
        status: 'success',
        message: 'Seja bem-vindo(a) à Comunidade Frontend Fusion!\n Cheque sua caixa de entrada para validar seu email.',
      })
    } catch (error) {
      console.log(error)

      setFormRequestStatus({
        status: 'error',
        message: 'Oops, ocorreu um erro.\n Tente novamente!',
      })
    }
  }

  return (
    <FormProvider {...methods}>
      <div className="flex flex-1 justify-end">
        <form
          className="flex flex-col p-10 gap-3 bg-gradient-to-tr from-[#646DF036] to-[#FCFCFD54] rounded-2xl mt-4"
          id="formulario"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-wrap gap-6 flex-col lg:flex-row">
            <Input
              label="Nome"
              type="text"
              id="name"
              placeholder="Nome"
              error={errors.name?.message}
            />
            <Input
              label="Sobrenome"
              type="text"
              id="lastName"
              placeholder="Sobrenome"
              error={errors.lastName?.message}
            />
          </div>

          <Input
            label="E-mail"
            type="email"
            id="email"
            placeholder="E-mail"
            error={errors.email?.message}
          />

          <div className="mt-4">
            <label htmlFor="position" className="text-white block text-sm font-medium py-2">
              Vaga desejada
            </label>
            <select
              id="position"
              defaultValue=""
              className="w-full px-4 py-2 text-white bg-transparent border-solid border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("position")}
            >
              <option value="" disabled>
                Selecione a vaga desejada...
              </option>
              {validVacancy.map((vacancy, index) => (
                <option className="text-black" value={vacancy} key={index}>
                  {vacancy}
                </option>
              ))}
            </select>
            {errors.position && (
              <p className="text-white text-xs mt-1">{errors.position.message}</p>
            )}
          </div>

          <div className="mt-4">
            <label htmlFor="description" className="block text-white text-sm font-medium py-2">
              Conte-nos sobre você
            </label>
            <textarea
              id="description"
              placeholder="Escreva um pouco sobre você!"
              className="w-full h-20 px-4 py-2 bg-transparent text-white border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-white text-xs mt-1">{errors.description.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#585FC5] w-full p-3 mt-4 text-center text-white font-bold rounded-lg focus:ring-2 hover:bg-[#3E4A9A] active:bg-[#2E3A7A] transition ease-in-out "
          >
            Enviar formulário
          </button>
          <Message status={formRequestStatus.status} message={formRequestStatus.message} />
        </form>
      </div>
    </FormProvider>
  );
};

export default Forms;
