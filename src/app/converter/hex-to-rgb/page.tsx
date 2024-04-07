import { useTranslationServer } from '@/hooks/use-translation/use-translation-server'

import { ConverterSection } from '../(components)/(converter)/converter-section'
import { ColorExplanationSection } from '../(components)/color-explanation-section'

export default function HexToRgb() {
  const { t } = useTranslationServer()

  return (
    <main className="flex w-screen flex-col gap-5 px-3 sm:max-w-[calc(100vw-213.883px)]">
      <ConverterSection
        title={t.pages.converter['hex-to-rgb']['HEX to RGB']}
        description="Hexadecimal para RGB"
        prefix="#"
        originalColorType="hex"
        finalColorType="rgb"
        placeholder="Hex"
      />
      <ColorExplanationSection
        title="Explorando o Código de Cores Hexadecimal (HEX)"
        paragraph="O código de cores hexadecimal, comumente conhecido como HEX, é uma
            forma de representar cores utilizando uma combinação de seis dígitos
            alfanuméricos. Cada par de dígitos representa a intensidade de
            vermelho, verde e azul, respectivamente, variando de 00 a FF. Essa
            notação é amplamente utilizada em design gráfico e desenvolvimento
            web para especificar cores com precisão e consistência em diferentes
            plataformas e dispositivos."
      />
      <ColorExplanationSection
        title="Compreendendo o Modelo de Cores RGB"
        paragraph="O modelo de cores RGB, abreviação de Red, Green e Blue, é um sistema
            de cores aditivas amplamente utilizado na representação de cores em
            dispositivos eletrônicos, como monitores de computador, telas de
            televisão e câmeras digitais. Nesse modelo, cada cor é representada
            como uma combinação de intensidades de vermelho, verde e azul,
            variando de 0 a 255. Ao ajustar essas intensidades, é possível criar
            uma ampla gama de cores visíveis para o olho humano."
      />
      <ColorExplanationSection
        title="Maximizando a Eficiência em Design com Conversões de Cores"
        paragraph="A conversão de cores HEX para RGB desempenha um papel fundamental em
            otimizar os processos de design, assegurando que as cores sejam
            consistentes em várias plataformas e dispositivos. Entender essas
            conversões não apenas aprimora a precisão no design gráfico e
            digital, mas também fortalece a comunicação visual, garantindo que a
            intenção original do designer seja mantida independentemente do meio
            utilizado."
      />
      <ColorExplanationSection
        title="A Importância da Paleta de Cores na Identidade Visual"
        paragraph="Uma paleta de cores bem escolhida é fundamental para estabelecer a
            identidade visual única de uma marca, influenciando profundamente
            como o público percebe e se conecta com ela. Cores não são apenas
            estética; elas evocam emoções e comunicam valores, desempenhando um
            papel essencial no branding e no marketing, ao criar uma imagem de
            marca coesa e impactante."
      />
    </main>
  )
}
