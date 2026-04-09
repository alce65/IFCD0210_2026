select name as país, population as población from countries Limit 10;

select count(*), sum(population) as "población total", avg(population) as media from countries;

select 
		re.name, 
		count(*) as "numero", 
		sum(co.population) as "población total", 
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
		sum(co.population) as "población total", 
		avg(co.population) as media 
	from countries as co 
	join regions as re
		on co.region_id = re.id
	join subregions as sr
		on co.subregion_id = sr.id
	group by sr.name, re.name
	having count(*) > 1
	order by re.name;

