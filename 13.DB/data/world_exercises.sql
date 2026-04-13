-- 1. Listar todos los países con su población y su extensión, 
-- incluyendo los correspondientes alias adecuados en español
-- Listar los 10 primeros países

select 
	id,
	name as país, 
	to_char(population, '999G999G999G999') as población, 
	to_char(area_sq_km, '999G999G999G999') as extensión 
from countries Limit 10;

-- 2. Añadir un elemento calculado: la densidad

select 
	id,
	name as país, 
	to_char(population, '999G999G999G999') as población, 
	to_char(area_sq_km, '999G999G999G999') as extensión,
	to_char(population/area_sq_km, '999G999') as densidad
from countries Limit 10;


-- 3. Listar los anteriores datos de los países entre el 10 y el 20

select
	id,
	name as país, 
	to_char(population, '999G999G999G999') as población, 
	to_char(area_sq_km, '999G999G999G999') as extensión,
	to_char(population/area_sq_km, '999G999') as densidad
from countries where id > 10 limit 10;

-- 4. Mostrar los 10 paises de mayor densidad (sin verla)

select
	id,
	name as país, 
	to_char(population, '999G999G999G999') as población, 
	to_char(area_sq_km, '999G999G999G999') as extensión
from countries
where population/area_sq_km IS NOT NULL
order by population/area_sq_km desc
limit 10;

-- Lo mismo, viendo la densidad

select
	id,
	name país, 
	to_char(population, '999G999G999G999') población, 
	to_char(area_sq_km, '999G999G999G999') extensión,
	to_char(population/area_sq_km, '999G999') "densidad hab/km2"
from countries
where population/area_sq_km IS NOT NULL
order by population/area_sq_km desc
limit 10;

-- Listar los países de Asia o África de cuatro letras ordenados por población

select 
		co.id,
		co.name país,
		re.name región,
		to_char(co.population, '999G999G999G999') población
	from countries co 
	join regions re
		on co.region_id = re.id
	where 
		re.name IN ('Asia','Africa')
		AND
		co.name LIKE '____'
	order by co.population
	limit 10;

-- Nombre de la ciudad, país y su forma de gobierno de las ciudades 
-- de más de 10.000.000 de habitantes de Asia y África

select ci.name, co.name, co.nationality, co.native
from cities ci
join countries co
	on ci.country_id = co.id
join regions re 
	on co.region_id = re.id
where re.name IN ('Asia','Africa')
	AND ci.population > 10000000;

select ci.name as city, st.name as region, ci.type, ci.population from cities ci
	join countries co
		on ci.country_id = co.id
	join states st
		on ci.state_id = st.id
where co.name = 'Spain' and ci.type != 'section' and ci.population > 100000 limit 20;

-- Subconsultas

select ci.name as city, st.name as region, ci.type, ci.population from cities ci
	join states st
		on ci.state_id = st.id
where ci.country_id = (select id from countries where name ='Spain')
 and ci.type != 'section' and ci.population > 100000 limit 20;

drop view if exists country_cities;
create view country_cities as
	select 
			ci.name as city, 
			st.name as region, 
			ci.type, 
			ci.population,
			co.name as pais
		from cities ci
		join countries co
			on ci.country_id = co.id
		join states st
			on ci.state_id = st.id;

select * from country_cities 
	where pais = 'Spain' and type != 'section' and population > 100000 
	limit 20;

select * from country_cities 
	where pais = 'Portugal' and type != 'section' and population > 100000 
	limit 20;

-- ###########################################################
select count(*), sum(population) as "población total", avg(population) as media from countries;

select 
		re.name, 
		count(*) as "numero", 
		to_char(sum(co.population), '999G999G999G999') as "población total", 
		avg(co.population) as media 
	from countries as co 
	join regions as re
		on co.region_id = re.id
	group by re.name
	having count(*) > 1;


select region_id from countries where region = '';

select 
		re.name as region,
		sr.name as subregion, 
		count(*) as "numero", 
		to_char(sum(co.population), '999G999G999G999') as "población total", 
		to_char(avg(co.population), '999G999G999G999') as media 
	from countries as co 
	join regions as re
		on co.region_id = re.id
	join subregions as sr
		on co.subregion_id = sr.id
	group by sr.name, re.name
	having count(*) > 1
	order by re.name;

