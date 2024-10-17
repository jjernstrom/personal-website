import { Link, Stack, Typography } from "@mui/material";
import { Spacing } from "../../../theme";
import { ArticleTitle } from "../../../components/ArticleTitle";
import Static1 from "../../../assets/Static1.png";
import Static2 from "../../../assets/Static2.png";
import Static3 from "../../../assets/Static3.png";

export const RogueLog2Data = {
  title: "Creating Noise",
  subTitle: "Rogue Vivarium: Part 2",
  navTitle: "RogueLog2",
  author: "JJernstrom",
  date: "October 17, 2024",
  description:
    "I'm very excited to bring together interests that have been brewing for quite some time and apply the engineering skills and best practices that I've cultivated from diligent study and expert mentorship.",
  image: Static1,
  tag: "Software Engineering",
};

export const RogueLog2 = () => {
  return (
    <Stack display="flex" maxWidth={Spacing.article} gap={2}>
      <ArticleTitle
        title={RogueLog2Data.title}
        subTitle={RogueLog2Data.subTitle}
        tag={RogueLog2Data.tag}
        date={RogueLog2Data.date}
        author={RogueLog2Data.author}
      />
      <Typography variant="h5">Drawing to the Screen</Typography>
      <Typography>
        I Started out with the goal of drawing random static to the screen I had
        in mind a graphics library that I'd been playing around with called{" "}
        <Link href="https://pixijs.com/">PixiJS</Link> which also has React
        specific implementation{" "}
        <Link href="https://pixijs.io/pixi-react/">PixiJS React</Link> to draw
        to the screen. My idea was to define a 2d array of objects that would
        store parameters at an index that correspond to an xy coordinate on the
        screen. To start off simple we store a boolean called empty and assign
        it a truth value based on a random number generator. Then we walk
        through the array and draw a rectangle and fill it with black or white
        depending on weather or not it is empty. Additionally we can define the
        size of the rectangle -- effectively giving us a "tile size," and array
        dimensions giving us our "map size." Here is the result:
      </Typography>
      <img
        src={Static1}
        alt="Randomly generated noise"
        style={{ maxWidth: "100%" }}
      />
      <Typography>
        Looks pretty good! Here we have a <code>tileSize</code> of 5x5 and a{" "}
        <code>mapSize</code> of 100x100 to make an overall image dimension of
        500x500 pixels.
      </Typography>
      <Typography>
        So far the PixiJS and ReactPixi libraries have worked fine. It is a
        little clunky in how things interface with React and I mostly follow
        this guide:
        <Link href="https://adamemery.dev/articles/pixi-react">
          {" Using PixiJS inside a React web app "}
        </Link>
        to get things setup, but at this stage with these parameters there were
        no issues drawing to the screen that the browser couldn't handle. An
        issue that did bother me a bit was how JavaScript/TypeScript handles 2d
        arrays and arrays in general. They seem clunky and inefficient, for
        example, as far as I know there is no clean way to define the size of a
        2d array without initializing the values by appending to the array with{" "}
        <code>.push()</code> And no clear behavior around efficiency
        consideration like in C. A lot of the implementation is obscured by the
        language which is good for a lot of web applications but in the case
        where we are doing computation intensive work, it would be nice to have
        some lower level access to array implementation. Something to put on the
        ToDo list to look into later.
      </Typography>
      <Typography>Where to go next?</Typography>
      <Typography variant="h5">
        Implementing a Perlin Noise algorithm
      </Typography>
      <Typography>
        The first results I got were not correct, but all the same interesting
        in their own right:
      </Typography>
      <img src={Static2} style={{ width: "100%" }} />
      <img src={Static3} style={{ width: "100%" }} />
      <Typography>
        These results are essentially random static, because the input vector to
        the perlin noise function is a pair of integers -- so the "frequency" is
        effectively one. This came about from a misunderstanding about the
        relationship between the gradient vector grid and the input:
      </Typography>
      <Typography>
        If the input is supposed to be a coordinate represented by 2 real
        floating point numbers, how is that applied when working with a 2d array
        where the indices are integers?
      </Typography>
      <Typography>
        The answer came to me later in bed as the research I had consumed
        started to seep in. We first multiply the integer inputs with a scaler
        value less than 1 (sometimes called the frequency) so that they fall in
        between the random vector gradient grid intersections.
      </Typography>
      <div style={{ padding: 20 }} />
    </Stack>
  );
};
