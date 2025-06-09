import { Card, CardContent, CardMedia, Container, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
 
import car5 from '../../assets/images/car5.jpg';
import car2 from '../../assets/images/car2.jpg';
import car3 from '../../assets/images/car3.jpg';
import car4 from '../../assets/images/car4.jpg';

const Card1 = () => {
  const cards = [
    {
      title: 'Car 1',
      description: 'Fast and sleek',
      image: car5,
      bgColor: '#e0f7fa',
    },
    {
      title: 'Car 2',
      description: 'Powerful engine',
     image: car2,
      bgColor: '#fce4ec',
    },
    {
      title: 'Car 3',
      description: 'Luxury interior',
     image: car3,
      bgColor: '#e8f5e9',
    },
    // {
    //   title: 'Car 4',
    //   description: 'Luxury interior',
    //  image: car4,
    //   bgColor: '#e8f5e9',
    // },
  ];

  return (
    <Container maxWidth="xl">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={20}
      breakpoints={{
        320: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 3 },
        // 1080: { slidesPerView: 4 },
      }}
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}  >
          <Card sx={{ backgroundColor: card.bgColor, maxWidth: 300 , mb:5}}>
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent sx={{textAlign: 'center'}}>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
  );
};

export default Card1;
