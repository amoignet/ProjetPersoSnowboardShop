// import { productService } from './../service/product.service'
import express, { Application, Request, Response, Router } from 'express';


export const productController = (app: Application) => {
    const productRouter: Router = express.Router();

    productRouter.get('/', (req: Request, res: Response) => {
            const products = [
                {
                id: 0,
                brand: 'Nitro',
                model:  'Team',
                size: 157,
                image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
                description: 'Cet hiver à nouveau, Nitro propose la Team, cette planche de snowboard homme pour niveau intermédiaire à confirmé qui est le modèle le plus polyvalent de la marque. Planche reconnue et éprouvée au fil des années, la Team est devenue une des planches les plus abouties et se présente comme la valeur sûre de la marque. La Team est un snowboard all-mountain équipé du meilleur noyau proposé par Nitro, le Powerlite Core fait en lames de peuplier choisies parmi les meilleures veines de bois ne présentant aucun noeud! Le noyau est léger et réactif et offre un toucher de neige excellent grâce à son profil Reflex Core Profile. La Team assure une prise de vitesse imbattable avec la semelle ultra rapide Sintered Speed Formula HD Base. Avec son shape twin directionnel, la Team offre une conduite joueuse et intuitive permettant de s\'amuser avec tout ce qui se présente sous votre spatule : saut, cassure de pente, souche, congère... Choisissez la Nitro Team dans sa version Trüe Camber avec son cambre standard apportant un maximum de pop et de soutien sous chaque appui. Le cambre standard Trüe Camber fait de la Team une planche précise et proposant des performances vous permettant de vous lancer avec confiance aussi bien à fond sur la piste que dans le snowpark ou encore dans les meilleurs hors-pistes de la station. La Nitro Team est un modèle de polyvalence qui range au placard tout le reste de votre quiver! Avec la Nitro Team vous avez LA board à tout faire pour un hiver chargé de ride et de souvenirs à bord de votre meilleure planche!',
                price: 479.90,
                },
                {
                id: 1,
                brand: 'Burton',
                model:  'Custom',
                size: 158,
                image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/c/u/custom-2021-configurable-burton-burt01729_01.jpg',
                description: 'La Burton Custom est un snowboard all-mountain homme, pour niveau confirmé. Si vous ne connaissez pas vos classiques en matière de planche de snowboard alors nous allons réviser ensemble! La Burton Custom est LA planche polyvalente par excellence. Véritable planche all-mountain, la Custom est un couteau suisse qui apporte LA solution à chaque situation. Modèle proposé depuis 1996, la Custom n\'a pas pris une ride durant ses 25 années de service, et voit ses technologies et sa construction affinées. Dotée d\'un cambre classique et d\'un flex rigide 7/10, la Custom est une planche passe-partout sans défaut. Elle permet de rider fort, peu importe le terrain la Custom accroche! Son flex réparti uniformément sur toute la longueur de la planche lui donne un très bon comportement en freestyle. S\'il faut lancer une rotation, aucun problème la Custom est là! Snowboard adapté à toutes les conditions, la Custom dispose de Carbon Highlights et du Squeezebox pour un gain de poids drastique, un pop plus retentissant et une conduite de luxe pour piloter dans les divers terrains qu\'offre la montagne. Tous les terrains, toutes les pentes, toutes les neiges, la Custom est conçue pour encaisser tout ce qui se trouve sur son chemin! ',
                price: 599.90,
                },
                {
                id: 2,
                brand: 'Nitro',
                model:  'Team',
                size: 157,
                image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
                description: 'Cet hiver à nouveau, Nitro propose la Team, cette planche de snowboard homme pour niveau intermédiaire à confirmé qui est le modèle le plus polyvalent de la marque. Planche reconnue et éprouvée au fil des années, la Team est devenue une des planches les plus abouties et se présente comme la valeur sûre de la marque. La Team est un snowboard all-mountain équipé du meilleur noyau proposé par Nitro, le Powerlite Core fait en lames de peuplier choisies parmi les meilleures veines de bois ne présentant aucun noeud! Le noyau est léger et réactif et offre un toucher de neige excellent grâce à son profil Reflex Core Profile. La Team assure une prise de vitesse imbattable avec la semelle ultra rapide Sintered Speed Formula HD Base. Avec son shape twin directionnel, la Team offre une conduite joueuse et intuitive permettant de s\'amuser avec tout ce qui se présente sous votre spatule : saut, cassure de pente, souche, congère... Choisissez la Nitro Team dans sa version Trüe Camber avec son cambre standard apportant un maximum de pop et de soutien sous chaque appui. Le cambre standard Trüe Camber fait de la Team une planche précise et proposant des performances vous permettant de vous lancer avec confiance aussi bien à fond sur la piste que dans le snowpark ou encore dans les meilleurs hors-pistes de la station. La Nitro Team est un modèle de polyvalence qui range au placard tout le reste de votre quiver! Avec la Nitro Team vous avez LA board à tout faire pour un hiver chargé de ride et de souvenirs à bord de votre meilleure planche!',
                price: 479.90,
                },
                {
                id: 3,
                brand: 'Nitro',
                model:  'Team',
                size: 157,
                image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
                description: 'Cet hiver à nouveau, Nitro propose la Team, cette planche de snowboard homme pour niveau intermédiaire à confirmé qui est le modèle le plus polyvalent de la marque. Planche reconnue et éprouvée au fil des années, la Team est devenue une des planches les plus abouties et se présente comme la valeur sûre de la marque. La Team est un snowboard all-mountain équipé du meilleur noyau proposé par Nitro, le Powerlite Core fait en lames de peuplier choisies parmi les meilleures veines de bois ne présentant aucun noeud! Le noyau est léger et réactif et offre un toucher de neige excellent grâce à son profil Reflex Core Profile. La Team assure une prise de vitesse imbattable avec la semelle ultra rapide Sintered Speed Formula HD Base. Avec son shape twin directionnel, la Team offre une conduite joueuse et intuitive permettant de s\'amuser avec tout ce qui se présente sous votre spatule : saut, cassure de pente, souche, congère... Choisissez la Nitro Team dans sa version Trüe Camber avec son cambre standard apportant un maximum de pop et de soutien sous chaque appui. Le cambre standard Trüe Camber fait de la Team une planche précise et proposant des performances vous permettant de vous lancer avec confiance aussi bien à fond sur la piste que dans le snowpark ou encore dans les meilleurs hors-pistes de la station. La Nitro Team est un modèle de polyvalence qui range au placard tout le reste de votre quiver! Avec la Nitro Team vous avez LA board à tout faire pour un hiver chargé de ride et de souvenirs à bord de votre meilleure planche!',
                price: 479.90,
                },
                {
                id: 4,
                brand: 'Nitro',
                model:  'Team',
                size: 157,
                image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
                description: 'Cet hiver à nouveau, Nitro propose la Team, cette planche de snowboard homme pour niveau intermédiaire à confirmé qui est le modèle le plus polyvalent de la marque. Planche reconnue et éprouvée au fil des années, la Team est devenue une des planches les plus abouties et se présente comme la valeur sûre de la marque. La Team est un snowboard all-mountain équipé du meilleur noyau proposé par Nitro, le Powerlite Core fait en lames de peuplier choisies parmi les meilleures veines de bois ne présentant aucun noeud! Le noyau est léger et réactif et offre un toucher de neige excellent grâce à son profil Reflex Core Profile. La Team assure une prise de vitesse imbattable avec la semelle ultra rapide Sintered Speed Formula HD Base. Avec son shape twin directionnel, la Team offre une conduite joueuse et intuitive permettant de s\'amuser avec tout ce qui se présente sous votre spatule : saut, cassure de pente, souche, congère... Choisissez la Nitro Team dans sa version Trüe Camber avec son cambre standard apportant un maximum de pop et de soutien sous chaque appui. Le cambre standard Trüe Camber fait de la Team une planche précise et proposant des performances vous permettant de vous lancer avec confiance aussi bien à fond sur la piste que dans le snowpark ou encore dans les meilleurs hors-pistes de la station. La Nitro Team est un modèle de polyvalence qui range au placard tout le reste de votre quiver! Avec la Nitro Team vous avez LA board à tout faire pour un hiver chargé de ride et de souvenirs à bord de votre meilleure planche!',
                price: 479.90,
                },
                {
                id: 5,
                brand: 'Nitro',
                model:  'Team',
                size: 157,
                image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
                description: 'Cet hiver à nouveau, Nitro propose la Team, cette planche de snowboard homme pour niveau intermédiaire à confirmé qui est le modèle le plus polyvalent de la marque. Planche reconnue et éprouvée au fil des années, la Team est devenue une des planches les plus abouties et se présente comme la valeur sûre de la marque. La Team est un snowboard all-mountain équipé du meilleur noyau proposé par Nitro, le Powerlite Core fait en lames de peuplier choisies parmi les meilleures veines de bois ne présentant aucun noeud! Le noyau est léger et réactif et offre un toucher de neige excellent grâce à son profil Reflex Core Profile. La Team assure une prise de vitesse imbattable avec la semelle ultra rapide Sintered Speed Formula HD Base. Avec son shape twin directionnel, la Team offre une conduite joueuse et intuitive permettant de s\'amuser avec tout ce qui se présente sous votre spatule : saut, cassure de pente, souche, congère... Choisissez la Nitro Team dans sa version Trüe Camber avec son cambre standard apportant un maximum de pop et de soutien sous chaque appui. Le cambre standard Trüe Camber fait de la Team une planche précise et proposant des performances vous permettant de vous lancer avec confiance aussi bien à fond sur la piste que dans le snowpark ou encore dans les meilleurs hors-pistes de la station. La Nitro Team est un modèle de polyvalence qui range au placard tout le reste de votre quiver! Avec la Nitro Team vous avez LA board à tout faire pour un hiver chargé de ride et de souvenirs à bord de votre meilleure planche!',
                price: 479.90,
                },
                {
                id: 6,
                brand: 'Nitro',
                model:  'Team',
                size: 157,
                image: 'https://images.cdn.snowleader.com/media/catalog/product/cache/1/small_image/210x/0dc2d03fe217f8c83829496872af24a0/t/e/team-2021-configurable-nitro-nitr00688_01.jpg',
                description: 'Cet hiver à nouveau, Nitro propose la Team, cette planche de snowboard homme pour niveau intermédiaire à confirmé qui est le modèle le plus polyvalent de la marque. Planche reconnue et éprouvée au fil des années, la Team est devenue une des planches les plus abouties et se présente comme la valeur sûre de la marque. La Team est un snowboard all-mountain équipé du meilleur noyau proposé par Nitro, le Powerlite Core fait en lames de peuplier choisies parmi les meilleures veines de bois ne présentant aucun noeud! Le noyau est léger et réactif et offre un toucher de neige excellent grâce à son profil Reflex Core Profile. La Team assure une prise de vitesse imbattable avec la semelle ultra rapide Sintered Speed Formula HD Base. Avec son shape twin directionnel, la Team offre une conduite joueuse et intuitive permettant de s\'amuser avec tout ce qui se présente sous votre spatule : saut, cassure de pente, souche, congère... Choisissez la Nitro Team dans sa version Trüe Camber avec son cambre standard apportant un maximum de pop et de soutien sous chaque appui. Le cambre standard Trüe Camber fait de la Team une planche précise et proposant des performances vous permettant de vous lancer avec confiance aussi bien à fond sur la piste que dans le snowpark ou encore dans les meilleurs hors-pistes de la station. La Nitro Team est un modèle de polyvalence qui range au placard tout le reste de votre quiver! Avec la Nitro Team vous avez LA board à tout faire pour un hiver chargé de ride et de souvenirs à bord de votre meilleure planche!',
                price: 479.90,
                }
            ];
            res.status(200).json(products)
        });


        app.use('/product', productRouter);
}