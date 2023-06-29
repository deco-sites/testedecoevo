export interface Props {
  src: string;
  textBold: string;
  textNormal: string;
}

export default function CardSwipper({ src, textBold, textNormal }: Props) {
  return (
    <div class="flex justify-center items-center space-x-4 text-white">
      <img src={src} alt="" class="w-14" />
      <div>
        <p class="font-bold">{textBold}</p>
        <p>{textNormal}</p>
      </div>
    </div>
  );
}
