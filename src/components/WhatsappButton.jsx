import React from 'react';

// Este é um componente React. Mesmo sendo simples (só um Link),
// para ser "hidratado" pelo Astro, ele precisa ser um .jsx
export default function WhatsappButton() {

  // Estilos CSS-in-JS para o botão flutuante
  const style = {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    backgroundColor: 'rgb(37, 211, 102)', // Cor do WhatsApp
    color: 'white',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem', // Tamanho do ícone (ajuste)
    boxShadow: '2px 4px 5px rgba(37, 211, 102, 0.15)',
    textDecoration: 'none',
    zIndex: 100,
    transition: 'transform 0.3s ease',
  };

  // (Idealmente, use um <svg> aqui, mas texto/emoji funciona)
  const icon = <svg width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.12114 72.8611C3.11771 85.2529 6.35347 97.3526 12.5062 108.017L2.53271 144.456L39.7988 134.678C50.1061 140.293 61.6547 143.235 73.3904 143.236H73.4213C112.163 143.236 143.7 111.69 143.716 72.9165C143.724 54.1279 136.418 36.4602 123.145 23.168C109.874 9.877 92.224 2.5535 73.4184 2.54492C34.6721 2.54492 3.13771 34.089 3.12171 72.8611" fill="url(#paint0_linear_17_5365)"/>
<path d="M3.12114 72.8611C3.11771 85.2529 6.35347 97.3526 12.5062 108.017L2.53271 144.456L39.7988 134.678C50.1061 140.293 61.6547 143.235 73.3904 143.236H73.4213C112.163 143.236 143.7 111.69 143.716 72.9165C143.724 54.1279 136.418 36.4602 123.145 23.168C109.874 9.877 92.224 2.5535 73.4184 2.54492C34.6721 2.54492 3.13771 34.089 3.12171 72.8611" fill="url(#paint1_linear_17_5365)"/>
<path d="M0.611276 72.8383C0.607277 85.676 3.95901 98.2085 10.3311 109.255L0 147L38.6023 136.872C49.2385 142.675 61.2138 145.734 73.3994 145.739H73.4308C113.562 145.739 146.232 113.058 146.249 72.8966C146.256 53.4328 138.688 35.1301 124.94 21.3617C111.191 7.59504 92.9099 0.00800321 73.4308 0C33.2922 0 0.627272 32.6759 0.611276 72.8383ZM23.5998 107.353L22.1585 105.063C16.0994 95.4228 12.9013 84.2823 12.9059 72.8429C12.9191 39.4609 40.0688 12.3021 73.4536 12.3021C89.621 12.3089 104.815 18.6155 116.243 30.0578C127.67 41.5012 133.958 56.713 133.954 72.892C133.94 106.274 106.789 133.436 73.4308 133.436H73.4068C62.5449 133.431 51.8922 130.512 42.6019 124.996L40.391 123.684L17.4836 129.694L23.5998 107.352V107.353Z" fill="url(#paint2_linear_17_5365)"/>
<path d="M55.2302 42.3872C53.8671 39.3557 52.4326 39.2945 51.1364 39.2413C50.0749 39.1956 48.8615 39.199 47.6492 39.199C46.4358 39.199 44.4643 39.6558 42.7979 41.4765C41.1297 43.299 36.4292 47.703 36.4292 56.6603C36.4292 65.6182 42.9493 74.2748 43.8582 75.4907C44.7683 76.7043 56.4453 95.6742 74.939 102.972C90.3089 109.037 93.4367 107.831 96.7724 107.526C100.109 107.223 107.538 103.123 109.053 98.8721C110.57 94.6212 110.57 90.9775 110.115 90.216C109.661 89.4574 108.447 89.0018 106.628 88.0918C104.808 87.1811 95.8623 82.7765 94.1947 82.1688C92.5266 81.5617 91.3138 81.2587 90.1003 83.0817C88.8869 84.9019 85.4027 89.0018 84.3406 90.216C83.2798 91.4331 82.2177 91.5846 80.3988 90.6739C78.5781 89.7604 72.7184 87.8402 65.7664 81.6383C60.3575 76.8124 56.7058 70.8528 55.6444 69.0298C54.5829 67.2097 55.5307 66.223 56.4431 65.3158C57.2606 64.5 58.2632 63.1898 59.1738 62.1271C60.081 61.0638 60.3838 60.3052 60.9905 59.091C61.5978 57.8757 61.2938 56.8124 60.8397 55.9017C60.3838 54.9911 56.8481 45.9869 55.2302 42.3872Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_17_5365" x1="7061.71" y1="14193.7" x2="7061.71" y2="2.54492" gradientUnits="userSpaceOnUse">
<stop stop-color="#1FAF38"/>
<stop offset="1" stop-color="#60D669"/>
</linearGradient>
<linearGradient id="paint1_linear_17_5365" x1="7061.71" y1="14193.7" x2="7061.71" y2="2.54492" gradientUnits="userSpaceOnUse">
<stop stop-color="#1FAF38"/>
<stop offset="1" stop-color="#60D669"/>
</linearGradient>
<linearGradient id="paint2_linear_17_5365" x1="7312.46" y1="14700" x2="7312.46" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9F9F9"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

  
  return (
    <a 
      href="https://wa.me/+553193233028" 
      target="_blank" 
      rel="noopener noreferrer"
      style={style}
      // Adicionamos interatividade (hover) para provar que o JS carregou
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.15)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
    
      {icon}
    </a>
  );
}