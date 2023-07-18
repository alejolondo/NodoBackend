export interface Signal {
  id:          string;
  title:       string;
  description: string;
  url:         string;
  urlToImage:  null | string;
  category:    string;
  tag:         string;
  publishedAt: string | null;
  createdAt:   null | string;
}
