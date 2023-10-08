import axios from 'axios';

type RequestContext = {
  id: number;
  name: string;
};

type Response = {
  name: string;
};

export default (req: RequestContext, res: Response) => {
  //Q: what does this code mean?
  //   res.status(200).json({ name: 'John Doe' });

  //create url

  const reqUrl = req;

  axios.get(reqUrl.name);
};
