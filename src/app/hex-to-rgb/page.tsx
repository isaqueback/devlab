'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { useConvertColor } from '../hooks/useConvertColor'
import { useLuminance } from '../hooks/useLuminance'

const hexToRgbSchema = z.object({
  hex: z.string().regex(/^\s*#?\s*([0-9A-F]{3}){1,2}\s*$/i, 'Cor inválida!'),
})

type HexToRgbType = z.infer<typeof hexToRgbSchema>

export default function HexToRgb() {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<HexToRgbType>({
    resolver: zodResolver(hexToRgbSchema),
    defaultValues: {
      hex: '',
    },
    mode: 'onChange',
  })

  const hexValue = watch('hex').trim()
    ? watch('hex').trim().startsWith('#')
      ? watch('hex').trim()
      : `#${watch('hex').trim()}`
    : ''
  const rgbValue = useConvertColor({ color: hexValue, to: 'rgb' })
  const isHexValid = !errors.hex && !!hexValue
  const luminance = useLuminance(watch('hex'))

  return (
    <main className="flex w-screen max-w-[calc(100vw-213.883px)] flex-col gap-5">
      <section className="flex min-h-screen w-screen max-w-[calc(100vw-213.883px)] flex-col items-center justify-center gap-10 pt-10">
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl font-bold">HEX para RGB</h1>
          <p className="text-xl text-muted-foreground">Hexadecimal para RGB</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="border-radius flex items-center justify-center rounded-lg border px-2 ring-2 ring-background ring-offset-2 focus-within:ring-ring">
            <span className="text-muted-foreground">#</span>
            <Input
              {...register('hex')}
              type="text"
              placeholder="Hex"
              className="border-none pl-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <small
            className={`mb-5 ml-2 ${errors.hex ? 'text-destructive' : hexValue ? 'text-emerald-500' : 'text-muted-foreground'}`}
          >
            {errors.hex
              ? errors.hex.message
              : isHexValid
                ? 'Cor válida!'
                : 'Coloque sua cor hexadecimal'}
          </small>
          <div
            className="flex h-10 w-full items-center rounded-md border bg-background px-2 transition-all duration-500 ease-out"
            style={{ backgroundColor: isHexValid ? hexValue : '' }}
          >
            <span
              className={`text-xs font-light tracking-wide ${luminance > 0.5 ? 'text-foreground' : 'text-background'}`}
            >
              {rgbValue}
            </span>
          </div>
          <Button>Copiar</Button>
        </div>
        <div className="flex h-[90px] w-[728px] items-center justify-center bg-muted-foreground text-background">
          Propaganda
        </div>
      </section>
      <section className="mx-8 rounded-md border shadow-sm">
        <div className="flex max-w-5xl flex-col gap-2 p-6">
          <h2 className="text-2xl font-semibold">
            Explorando o Código de Cores Hexadecimal (HEX)
          </h2>
          <p className="font-light">
            O código de cores hexadecimal, comumente conhecido como HEX, é uma
            forma de representar cores utilizando uma combinação de seis dígitos
            alfanuméricos. Cada par de dígitos representa a intensidade de
            vermelho, verde e azul, respectivamente, variando de 00 a FF. Essa
            notação é amplamente utilizada em design gráfico e desenvolvimento
            web para especificar cores com precisão e consistência em diferentes
            plataformas e dispositivos.
          </p>
        </div>
      </section>
      <section className="mx-8 rounded-md border shadow-sm">
        <div className="flex max-w-5xl flex-col gap-2 p-6">
          <h2 className="text-2xl font-semibold">
            Compreendendo o Modelo de Cores RGB
          </h2>
          <p className="font-light">
            O modelo de cores RGB, abreviação de Red, Green e Blue, é um sistema
            de cores aditivas amplamente utilizado na representação de cores em
            dispositivos eletrônicos, como monitores de computador, telas de
            televisão e câmeras digitais. Nesse modelo, cada cor é representada
            como uma combinação de intensidades de vermelho, verde e azul,
            variando de 0 a 255. Ao ajustar essas intensidades, é possível criar
            uma ampla gama de cores visíveis para o olho humano.
          </p>
        </div>
      </section>
      <section className="mx-8 rounded-md border shadow-sm">
        <div className="flex max-w-5xl flex-col gap-2 p-6">
          <h2 className="text-2xl font-semibold">
            Maximizando a Eficiência em Design com Conversões de Cores
          </h2>
          <p className="font-light">
            A conversão de cores HEX para RGB desempenha um papel fundamental em
            otimizar os processos de design, assegurando que as cores sejam
            consistentes em várias plataformas e dispositivos. Entender essas
            conversões não apenas aprimora a precisão no design gráfico e
            digital, mas também fortalece a comunicação visual, garantindo que a
            intenção original do designer seja mantida independentemente do meio
            utilizado.
          </p>
        </div>
      </section>
      <section className="mx-8 rounded-md border shadow-sm">
        <div className="flex max-w-5xl flex-col gap-2 p-6">
          <h2 className="text-2xl font-semibold">
            A Importância da Paleta de Cores na Identidade Visual
          </h2>
          <p className="font-light">
            Uma paleta de cores bem escolhida é fundamental para estabelecer a
            identidade visual única de uma marca, influenciando profundamente
            como o público percebe e se conecta com ela. Cores não são apenas
            estética; elas evocam emoções e comunicam valores, desempenhando um
            papel essencial no branding e no marketing, ao criar uma imagem de
            marca coesa e impactante.
          </p>
        </div>
      </section>
    </main>
  )
}
