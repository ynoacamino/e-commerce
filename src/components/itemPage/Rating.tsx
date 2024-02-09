import { StarIcon, StarFilledIcon } from '@radix-ui/react-icons';

export default function Rating({ rating, count }: { rating: number, count: number }) {
  const completeStars = Math.floor(rating);
  const imcompleteStars = 5 - completeStars;

  return (
    <div className="flex items-center gap-1">
      {
        Array.from({ length: completeStars }, () => (
          <StarFilledIcon key={crypto.randomUUID()} width={16} height={16} />
        ))
      }
      {
        Array.from({ length: imcompleteStars }, () => (
          <StarIcon key={crypto.randomUUID()} width={16} height={16} />
        ))
      }
      <span className="ml-2">
        {rating}
        {' '}
        (
        {count}
        )
      </span>
    </div>
  );
}
