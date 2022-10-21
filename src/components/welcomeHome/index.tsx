import { Button } from "../button"
import { WelcomeCardStyle } from "./style"

export const WelcomeHome = () => {
    return (
        <WelcomeCardStyle>
            <h1>Velocidade e experiência em um lugar perfiero para você</h1>

            <p>Um ambiente feito para você explorar o seu melhor</p>

            <div className="div--botoes">
                <Button theme="none" color="white" name="Leilão" />
                <Button theme="none" color="white" name="Carros" />
                <Button theme="none" color="white" name="Motos" />
            </div>
        </WelcomeCardStyle>
    )
}