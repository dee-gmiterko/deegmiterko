VARIANTS := plain frontend agentic frontend-agentic dev-ops scraping ecommerce platform-improve game-design-numerical data-analytics quality-assurance quality-assurance-agentic data-engineer data-engineer-agentic backend ai-engineer ai-dev-ops agentic-backend frontend-data
OUT := 2026
NAME := Dominik Gmiterko

all: $(VARIANTS)

$(VARIANTS):
	mkdir -p "$(OUT)/$@"
	pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$(OUT)/$@" -jobname="$(NAME)" "\def\variant{$@}\input{main.tex}"
	pdflatex -interaction=nonstopmode -halt-on-error -output-directory="$(OUT)/$@" -jobname="$(NAME)" "\def\variant{$@}\input{main.tex}"

.PHONY: all $(VARIANTS)
