import { z } from 'zod';

const Data = z.object({
    id: z.string(),
    name: z.string(),
})

type DataType = z.infer<typeof Data>;

interface DataFromAPI {
    id: string;
    name: string; // doesn't give your runtime protection
}

fetch('/something')
  .then(res => res.json())
  .then((result: DataType) => {
    const data = Data.parse(result); // give you runtime protection
    console.log(data.name);
  });