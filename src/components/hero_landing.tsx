import { Title, Text, Container, Button, Overlay, createStyles, Space } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 180,
    paddingBottom: 250,
    // URL CREATED VIA S3 CONSOLE; MUST USE AWS CLI TO EXTEND THE DURATION PAST 12 HRS OF PRESIGNED SHARE
    backgroundImage: 'url(https://chumbucket42069.s3.us-west-1.amazonaws.com/sherb_sleepy.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLWVhc3QtMSJGMEQCIGhZbMd%2FHhzSDRBLPbOqhH51ckoUnhFGZ7Qd%2BJ6doilEAiACSgksS8%2B1AybWRpWHlf2HDHXtrUmLPnSWclLwaDXieirkAghpEAAaDDI5ODIxMTI3MTE3NSIMRyWuzPASexY3UG04KsECNX9r5XdMxL%2FxGOtzLoZhel2dN7MsiZWn4OUpZx4IAAF8rqxfco%2Fjn9UXO81RYR4YcP5oyaSwShotGtOzethP2lnlEMpCki%2FDRljZ8jUaFukZWXhSQESL8xa0NMmYHEHbYGYd2l0b7BNrGavcjGN62ToT2yXfrkzcBRuuzhG%2Fdm0D8lS%2Bc1Z58xc6wgHMlDI88iVFGljgQtEq3fUXp3b8gOtVYuMct3FTERawd2FNe7QwECsJvdJxv%2BdROVV2r%2BTbdWgU9YzgWssIfcBMXsMW4DIQp%2Fop3LRU85qsowduHItJAFuFqFynnotUwF8f8UbdsRH4KmQJc6KurcNbaauZy31D1xwHWIWT%2FHvPEk1l8UUEYffYsMlu%2FBvBj79D3Wv0eQJWHkgb7kwcp9TKzf8dtCtzFFzOjUIT2BQ3wQ7tKEeHMOvp1ZcGOrQCjWDXmTN1XM%2F1Z8PjJ1JQTXq3aW1iJlt7MF1yH34QTXkKU93wBrheUH7pJAR%2BkAaDMyDXO4Cgma6J5nfDJTdXsROdOjd3Ws578R%2BGkj1nFvwq7KLUIz1ZDkGgWHJRK77mwyYC059RcmiX7AkBLey7O7MYo1ta1gw4RCHvPQawcc0ycbPWGQ20T6swYAEhOYJ2CwOnmqWkcxYeGOua16lPI%2FIuOHfTnhiqStOg5bZrRvPyK9kk7FiP8PQL3JvfZqlb33LRjY1EbXkyVL0PPQvBecD8rvyD7WJCpedg8%2FVWYdc0Fe2ydS%2B%2BdNe5phrNVsjwNwBct%2FBxgQEMEUL7ehs2wGiM4H8P91jOaMhQnAUMuDJO7RymbHBdjUv0fO3yX7Ot82amFuL4gjrt9Lojh08BY5Zgr1U%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220811T234027Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIAUK3WG4ID76D7PEMS%2F20220811%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=ea75fdd735a2e83c0831f8455f6055a01293e32346ef6f8f576cc1e18e659c03)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 520px)': {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));


export function Hero_Landing() {
  const { classes, cx } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          My dog deserves the {' '}
          <Text component="span" inherit className={classes.highlight}>
            best
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Including the best website – it's not done yet, but you can't rush perfection.
          <Space/>
          Use the button below to navigate to a quick summary of myself and my projects. There will be more dog pictures, I promise.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
          Home Page
          </Button>
          {/* alternative:  component = "a" href ="wherever"*/}
        </div>
      </div>
    </div>
  );
}