select mo.movie_id AS id, 
       mo.title,
	   ARRAY_AGG(ge.genre_id || '|' || ge.name) as genres,
       mo.release_year as year, 
       mo.director, 
       mo.duration, 
       mo.poster, 
       mo.rate
from movies mo
join movies_genres mg
on mo.movie_id = mg.movie_id
join genres ge
on ge.genre_id = mg.genre_id
group by mo.movie_id
limit 10;

select mo.movie_id AS id, 
       mo.title,
	   ARRAY_AGG(ge.genre_id || '|' || ge.name) as genres,
       mo.release_year as year, 
       mo.director, 
       mo.duration, 
       mo.poster, 
       mo.rate
from movies mo
join movies_genres mg
on mo.movie_id = mg.movie_id
join genres ge
on ge.genre_id = mg.genre_id
where mo.title ilike '%m%'
group by mo.movie_id;