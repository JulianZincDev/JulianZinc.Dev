import { Background } from "@/components/Background/Background"
import { MenuBar } from "@/components/Menubar/Menubar"

export const Landing = () => {
  return (
    <Background>
      <MenuBar />
      <div style={{ width: '100%', height: '100%' }} />
    </Background>
  )
}
